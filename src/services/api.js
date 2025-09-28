/**
 * Servizio API semplificato per il corso React
 * 
 * Questo file contiene solo le funzioni essenziali per:
 * - Autenticazione (login)
 * - Gestione errori base
 * 
 * Concetti utilizzati:
 * - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * - Async/Await: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
 * - Error Handling: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
 */

// Base URL del backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * Configurazione base per tutte le richieste
 */
const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Wrapper semplificato per fetch con gestione errori
 * 
 * @param {string} url - URL relativo (es. '/auth/login')
 * @param {object} options - Opzioni fetch personalizzate
 * @returns {Promise} Promise con dati o errore
 */
const apiRequest = async (url, options = {}) => {
  try {
    const fullUrl = `${API_BASE_URL}${url}`;
    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    console.log(`📡 API Request: ${config.method || 'GET'} ${fullUrl}`);

    const response = await fetch(fullUrl, config);

    // Gestione errori HTTP
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ API Response:`, data);
    return data;

  } catch (error) {
    console.error(`❌ API Error:`, error);
    throw error;
  }
};

// =============================================================================
// AUTH API - Gestione autenticazione
// =============================================================================

/**
 * Effettua login con username e password
 * 
 * @param {string} username - Nome utente
 * @param {string} password - Password
 * @returns {Promise<object>} Dati utente
 */
export const login = async (username, password) => {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Gestisce errori di rete in modo user-friendly
 * 
 * @param {Error} error - Errore catturato
 * @returns {string} Messaggio di errore comprensibile
 */
export const getErrorMessage = (error) => {
  if (error.message.includes('fetch')) {
    return 'Impossibile connettersi al server. Verifica la connessione.';
  }
  if (error.message.includes('401')) {
    return 'Accesso non autorizzato. Effettua nuovamente il login.';
  }
  if (error.message.includes('404')) {
    return 'Risorsa non trovata.';
  }
  if (error.message.includes('500')) {
    return 'Errore del server. Riprova più tardi.';
  }
  return error.message || 'Si è verificato un errore imprevisto.';
};

// =============================================================================
// ESEMPI PER GLI STUDENTI
// =============================================================================

/*
ESEMPIO DI UTILIZZO NEL COMPONENTE LOGIN:

```jsx
import { login, getErrorMessage } from '../services/api';

const handleLogin = async (username, password) => {
  try {
    const result = await login(username, password);
    // Login riuscito - gestire successo
    console.log('Login successful:', result);
  } catch (error) {
    // Login fallito - gestire errore
    const errorMessage = getErrorMessage(error);
    console.error('Login failed:', errorMessage);
  }
};
```

NOTA: Questo file è stato semplificato per il corso base.
In futuro potrai aggiungere altre funzioni API come:
- getVoti() per ottenere i voti
- getCompiti() per ottenere i compiti
- addVoto() per aggiungere voti
- etc.
*/
