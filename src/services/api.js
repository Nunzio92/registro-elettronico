/**
 * 🌐 API Service - TODO: Implementare chiamate al backend
 * 
 * Questo file gestisce tutte le chiamate API per l'autenticazione.
 * 
 * Concetti da imparare:
 * - Fetch API
 * - Async/Await
 * - Error Handling
 * - JSON
 */

// TODO: Definire URL base del backend
// const API_BASE_URL = 'http://localhost:3001';

/**
 * TODO: Implementare funzione login
 * 
 * Deve:
 * 1. Fare POST a /auth/login con fetch()
 * 2. Inviare { username, password } nel body come JSON
 * 3. Gestire errori HTTP
 * 4. Ritornare i dati della risposta con response.json()
 * 
 * 📖 Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 📖 JSON: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * 📖 Async: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 * @param {string} username - Nome utente
 * @param {string} password - Password
 * @returns {Promise<object>} Dati utente
 */
export const login = async (username, password) => {
  // TODO: Implementare chiamata fetch con:
  // - URL: API_BASE_URL + '/auth/login'
  // - method: 'POST'
  // - headers: { 'Content-Type': 'application/json' }
  // - body: JSON.stringify({ username, password })
  // TODO: Controllare response.ok e gestire errori
  // TODO: Ritornare response.json()
  
  console.log('TODO: Implementare login API');
  throw new Error('Login non ancora implementato');
};

/**
 * TODO: Implementare gestione errori user-friendly
 * 
 * Deve controllare error.message per:
 * - 'Failed to fetch' → Errore di connessione
 * - '401' → Credenziali sbagliate
 * - '404' → Risorsa non trovata
 * - '500' → Errore server
 * 
 * 📖 Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * 📖 Conditional: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * 
 * @param {Error} error - Errore catturato
 * @returns {string} Messaggio di errore comprensibile
 */
export const getErrorMessage = (error) => {
  // TODO: Usare if/else o switch per controllare error.message
  // TODO: Ritornare messaggi user-friendly per ogni tipo di errore
  // TODO: Fallback per errori sconosciuti
  
  console.log('TODO: Implementare gestione errori');
  return 'Errore generico';
};

/* 
📝 ESEMPI DI IMPLEMENTAZIONE:

// Esempio fetch POST:
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username, password })
});

// Esempio controllo errori:
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

// Esempio gestione errori:
if (error.message.includes('Failed to fetch')) {
  return 'Errore di connessione';
}

📖 Tutorial completo: https://javascript.info/fetch
*/
