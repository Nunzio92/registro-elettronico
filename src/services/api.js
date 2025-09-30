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
const API_BASE_URL = 'http://localhost:3001';

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

  const response = await fetch(API_BASE_URL + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (!response.ok) {
    const error = new Error('HTTP Error');
    error.status = response.status;
    throw error;
  }

  return response.json();
  
  // console.log('TODO: Implementare login API');
  // throw new Error('Login non ancora implementato');
};

/**
 * TODO: Implementare gestione errori user-friendly
 * 
 * Deve controllare error.status per status HTTP:
 * - 401 → 'Credenziali non valide'
 * - 404 → 'Servizio non trovato'
 * - 500 → 'Errore del server'
 * - undefined (errore di rete) → 'Errore di connessione'
 * 
 * 📖 Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * 📖 Switch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * 
 * @param {Error} error - Errore catturato dalla fetch (con proprietà status se HTTP)
 * @returns {string} Messaggio di errore comprensibile per l'utente
 */
export const getErrorMessage = (error) => {
  // TODO: Usare if/else o switch per controllare error.status
  // TODO: Gestire caso quando error.status è undefined (errore di rete)
  // TODO: Ritornare messaggi comprensibili per l'utente
  
  console.log('TODO: Implementare gestione errori');
  return 'Errore generico';
};

/* 
📝 HINT E SUGGERIMENTI:

// Esempio struttura fetch POST:
const response = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

// Hint: Controllo condizionale per numeri
if (error.status === 401) {
  // caso specifico
}

📖 Tutorial completo: https://javascript.info/fetch
*/
