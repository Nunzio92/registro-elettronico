/**
 * AuthContext aggiornato per utilizzare API Backend
 * 
 * Versione evolution del AuthContext che:
 * - Utilizza il backend JSON Server invece di logica hardcoded
 * - Gestisce loading states per chiamate asincrone
 * - Implementa error handling per problemi di rete
 * - Mantiene compatibilità con il codice esistente
 * 
 * ISTRUZIONI PER GLI STUDENTI:
 * 1. Sostituire import da './AuthContext' a './AuthContextAPI'
 * 2. Avviare backend prima di testare
 * 3. Osservare Network tab in DevTools per vedere le chiamate API
 * 
 * Concetti React utilizzati:
 * - Async/Await in useEffect: https://react.dev/reference/react/useEffect#fetching-data-with-effects
 * - Error boundaries: https://react.dev/reference/react/Component#catching-rendering-errors-with-a-error-boundary
 * - Loading states: Pattern comune in app reali
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin } from '../services/api';

// Context per condividere lo stato di autenticazione
const AuthContext = createContext();

/**
 * Custom Hook per utilizzare il context di autenticazione
 * 
 * Stesso API del AuthContext originale, ma con funzionalità estese
 * 
 * @returns {Object} Oggetto con stato e funzioni di autenticazione + loading/error
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere utilizzato all\'interno di AuthProvider');
  }
  return context;
};

/**
 * Provider Component per autenticazione con API Backend
 * 
 * Gestisce:
 * - Stato dell'utente corrente
 * - Chiamate API per login
 * - Stati di loading per operazioni asincrone
 * - Gestione errori di rete
 * - Persistenza in localStorage (compatibile con versione precedente)
 * 
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componenti figli
 */
export const AuthProvider = ({ children }) => {
  // State per memorizzare i dati dell'utente
  const [user, setUser] = useState(null);
  
  // State per gestire il caricamento iniziale
  const [loading, setLoading] = useState(true);
  
  // State per gestire il caricamento del login
  const [loginLoading, setLoginLoading] = useState(false);
  
  // State per gestire errori
  const [error, setError] = useState(null);

  /**
   * Effect per caricare i dati utente dal localStorage all'avvio
   * 
   * Stesso comportamento della versione precedente per compatibilità
   */
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        console.log('👤 Utente caricato da localStorage:', userData.username);
      }
    } catch (error) {
      console.error('❌ Errore nel caricamento dati utente:', error);
      localStorage.removeItem('user'); // Rimuovi dati corrotti
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Funzione per effettuare il login tramite API
   * 
   * Versione async che chiama il backend invece di logica hardcoded
   * 
   * @param {string} username - Nome utente
   * @param {string} password - Password
   * @returns {Promise<Object>} Risultato del login (success + eventuale errore)
   */
  const login = async (username, password) => {
    setLoginLoading(true);
    setError(null);

    try {
      console.log('🔐 Tentativo di login per:', username);
      
      // Chiamata API al backend
      const response = await apiLogin(username, password);
      
      if (response.success) {
        const userData = response.user;
        
        // Aggiorna lo stato locale
        setUser(userData);
        
        // Salva in localStorage per persistenza
        localStorage.setItem('user', JSON.stringify(userData));
        
        console.log('✅ Login riuscito:', userData.username);
        return { success: true };
        
      } else {
        // Questo caso non dovrebbe verificarsi con l'API corrente,
        // ma manteniamo compatibilità
        const errorMsg = response.error || 'Errore di login sconosciuto';
        setError(errorMsg);
        return { success: false, error: errorMsg };
      }
      
    } catch (error) {
      console.error('❌ Errore durante il login:', error);
      
      // Gestione errori user-friendly
      let errorMessage = 'Si è verificato un errore durante il login';
      
      if (error.message.includes('401') || error.message.includes('Credenziali')) {
        errorMessage = 'Nome utente o password non validi';
      } else if (error.message.includes('fetch') || error.message.includes('network')) {
        errorMessage = 'Impossibile contattare il server. Verifica la connessione.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Il server non risponde. Riprova più tardi.';
      }
      
      setError(errorMessage);
      return { success: false, error: errorMessage };
      
    } finally {
      setLoginLoading(false);
    }
  };

  /**
   * Funzione per effettuare il logout
   * 
   * Stesso comportamento della versione precedente
   */
  const logout = () => {
    console.log('👋 Logout utente:', user?.username);
    setUser(null);
    setError(null);
    localStorage.removeItem('user');
  };

  /**
   * Funzione per pulire errori
   * 
   * Utile per reset errori dopo che l'utente li ha visti
   */
  const clearError = () => {
    setError(null);
  };

  // Oggetto value condiviso tramite Context
  const value = {
    // Stati compatibili con versione precedente
    user,                    // Dati dell'utente corrente
    loading,                 // Stato di caricamento iniziale
    isAuthenticated: !!user, // Boolean: true se l'utente è loggato
    
    // Funzioni compatibili con versione precedente
    login,                   // Funzione per fare login (ora async)
    logout,                  // Funzione per fare logout
    
    // Nuove funzionalità per gestione API
    loginLoading,           // Stato di caricamento del login
    error,                  // Errore corrente
    clearError,             // Funzione per pulire errori
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// =============================================================================
// ESEMPIO DI UTILIZZO NEI COMPONENTI
// =============================================================================

/*
AGGIORNAMENTO LOGINFORM PER USARE NUOVI STATI:

```jsx
// In LoginForm.js
import { useAuth } from '../contexts/AuthContextAPI'; // <-- Cambiare import

const LoginForm = () => {
  const { login, loginLoading, error, clearError } = useAuth(); // <-- Aggiungere nuovi stati
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  const handleSubmit = async (e) => { // <-- Ora async
    e.preventDefault();
    clearError(); // <-- Pulisci errori precedenti
    
    // Login ora è async
    const result = await login(credentials.username, credentials.password);
    
    if (result.success) {
      navigate('/dashboard');
    }
    // Errore già gestito nel context, non serve setError locale
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {/* ... campi input ... */}
        
        {/* Mostra errore dal context invece che locale */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loginLoading} // <-- Disabilita durante loading
          sx={{ mt: 3, mb: 2 }}
        >
          {loginLoading ? 'Accesso in corso...' : 'Accedi'}
        </Button>
      </form>
    </Container>
  );
};
```

COMPONENTE CON LOADING INIZIALE:

```jsx
// In App.js o ProtectedRoute.js
const { loading } = useAuth();

if (loading) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress />
      <Typography sx={{ ml: 2 }}>Caricamento...</Typography>
    </Box>
  );
}
```

ERROR BOUNDARY PER GESTIRE ERRORI API:

```jsx
// Componente ErrorBoundary (opzionale per studenti avanzati)
class ApiErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          Si è verificato un errore imprevisto. Ricarica la pagina.
        </Alert>
      );
    }
    return this.props.children;
  }
}
```
*/
