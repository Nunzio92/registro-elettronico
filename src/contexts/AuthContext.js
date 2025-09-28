/**
 * Context per la gestione dell'autenticazione
 * 
 * Implementa il pattern Context API per condividere lo stato di autenticazione
 * in tutta l'applicazione senza passare props manualmente.
 * 
 * Concetti React utilizzati:
 * - Context API: https://react.dev/reference/react/createContext
 * - useState Hook: https://react.dev/reference/react/useState
 * - useEffect Hook: https://react.dev/reference/react/useEffect
 * - Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// Creazione del Context per l'autenticazione
const AuthContext = createContext();

/**
 * Custom Hook per utilizzare il context di autenticazione
 * 
 * Questo è un pattern comune per incapsulare la logica del Context
 * e fornire un'interfaccia pulita ai componenti che ne hanno bisogno.
 * 
 * @returns {Object} Oggetto con stato e funzioni di autenticazione
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere utilizzato all\'interno di AuthProvider');
  }
  return context;
};

/**
 * Provider Component che fornisce il context di autenticazione
 * 
 * Gestisce:
 * - Stato dell'utente corrente
 * - Funzioni di login e logout
 * - Persistenza in localStorage
 * - Stato di caricamento
 * 
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componenti figli
 */
export const AuthProvider = ({ children }) => {
  // State Hook per memorizzare i dati dell'utente
  const [user, setUser] = useState(null);
  // State Hook per gestire lo stato di caricamento
  const [loading, setLoading] = useState(true);

  /**
   * Effect Hook per caricare i dati utente dal localStorage all'avvio
   * 
   * useEffect viene eseguito dopo il primo render del componente
   * L'array vuoto [] significa che si esegue solo una volta (componentDidMount)
   */
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []); // Dependency array vuoto = esegui solo al mount

  /**
   * Funzione per effettuare il login
   * 
   * Implementazione semplificata per scopi didattici.
   * In un'app reale, questa funzione farebbe una chiamata API.
   * 
   * @param {string} username - Nome utente
   * @param {string} password - Password
   * @returns {Object} Risultato del login (success + eventuale errore)
   */
  const login = (username, password) => {
    // Simulazione login semplice per scopi didattici
    if (username === 'studente' && password === 'password') {
      const userData = { username, role: 'studente' };
      
      // Aggiorna lo stato locale
      setUser(userData);
      
      // Salva in localStorage per persistenza
      localStorage.setItem('user', JSON.stringify(userData));
      
      return { success: true };
    }
    return { success: false, error: 'Credenziali non valide' };
  };

  /**
   * Funzione per effettuare il logout
   * 
   * Rimuove i dati utente sia dallo stato che dal localStorage
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Oggetto value che verrà condiviso tramite il Context
  const value = {
    user,              // Dati dell'utente corrente
    login,             // Funzione per fare login
    logout,            // Funzione per fare logout
    loading,           // Stato di caricamento
    isAuthenticated: !!user  // Boolean: true se l'utente è loggato
  };

  // Provider che rende disponibile il Context ai componenti figli
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
