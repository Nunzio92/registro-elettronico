/**
 * Componente LoginForm - Form per l'autenticazione utente
 * 
 * Implementa un form di login con Material-UI che gestisce:
 * - Input controllati per username e password
 * - Validazione delle credenziali
 * - Gestione degli errori
 * - Integrazione con AuthContext
 * 
 * Concetti React utilizzati:
 * - Controlled Components: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
 * - Event Handling: https://react.dev/learn/responding-to-events
 * - Forms: https://react.dev/reference/react-dom/components/form
 * - Programmatic Navigation: https://reactrouter.com/en/main/hooks/use-navigate
 */

import React, { useState, useEffect } from 'react';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Container
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * Componente funzionale LoginForm
 * 
 * Utilizza il pattern di Controlled Components per gestire gli input del form
 */
const LoginForm = () => {
  // State per memorizzare le credenziali inserite dall'utente
  // Oggetto con username e password - stato locale del componente
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  // State per gestire i messaggi di errore
  const [error, setError] = useState('');
  
  // Hook personalizzato per accedere alle funzioni di autenticazione
  const { login, isAuthenticated } = useAuth();
  
  // Hook per la navigazione programmatica tra le pagine
  // useNavigate permette di cambiare pagina via codice (non click utente)
  const navigate = useNavigate();

  /**
   * Effect per reindirizzare utenti già autenticati
   * 
   * Se l'utente è già loggato e prova ad accedere al login,
   * viene automaticamente reindirizzato alla dashboard
   */
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  /**
   * Event handler per i cambiamenti nei campi input
   * 
   * Utilizza il pattern del nome dell'input per aggiornare lo stato
   * corrispondente nell'oggetto credentials
   * 
   * @param {Event} e - Event object dal form
   */
  const handleChange = (e) => {
    setCredentials({
      ...credentials,  // Spread operator per mantenere gli altri valori
      [e.target.name]: e.target.value  // Computed property name
    });
  };

  /**
   * Event handler per la sottomissione del form
   * 
   * Previene il comportamento predefinito del browser e gestisce
   * la logica di login chiamando la funzione dal context.
   * Se il login ha successo, naviga automaticamente alla dashboard.
   * 
   * @param {Event} e - Event object dal form
   */
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene il reload della pagina
    setError('');        // Reset dell'errore precedente
    
    // Chiamata alla funzione di login dal context
    const result = login(credentials.username, credentials.password);
    
    if (result.success) {
      // Login riuscito - naviga alla dashboard
      navigate('/dashboard');
    } else {
      // Login fallito - mostra errore
      setError(result.error);
    }
  };

  /**
   * Render del componente LoginForm
   * 
   * Struttura JSX che crea un form centrato con Material-UI
   * Ogni campo input è "controllato" (controlled component)
   */
  return (
    // Container Material-UI per centrare il contenuto
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Paper crea l'effetto "carta" con ombra */}
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Icona della scuola */}
            <SchoolIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
            
            {/* Titolo principale */}
            <Typography component="h1" variant="h4" gutterBottom>
              Registro Elettronico
            </Typography>
            
            {/* Sottotitolo */}
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
              Accedi con le tue credenziali
            </Typography>
            
            {/* Form con onSubmit handler */}
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              {/* Campo username - Controlled Component */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome utente"
                name="username"        // Nome che corrisponde allo state
                autoComplete="username"
                autoFocus
                value={credentials.username}  // Valore dallo state
                onChange={handleChange}       // Handler per aggiornare lo state
              />
              
              {/* Campo password - Controlled Component */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"       // Nome che corrisponde allo state
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}  // Valore dallo state
                onChange={handleChange}       // Handler per aggiornare lo state
              />
              
              {/* Rendering condizionale dell'errore */}
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
              
              {/* Button di submit */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Accedi
              </Button>
              
              {/* Testo informativo con credenziali demo */}
              <Typography variant="body2" color="textSecondary" align="center">
                Credenziali demo: studente / password
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginForm;
