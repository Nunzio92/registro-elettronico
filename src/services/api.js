/**
 * Servizio API per comunicare con il backend
 * 
 * Questo file centralizza tutte le chiamate API per:
 * - Evitare duplicazione di codice
 * - Gestire configurazioni comuni (base URL, headers)
 * - Gestire errori in modo consistente
 * - Facilitare testing e mocking
 * 
 * Concetti utilizzati:
 * - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * - Async/Await: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
 * - Error Handling: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
 */

// Base URL del backend - in produzione sarà diverso
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
 * Wrapper per fetch con gestione errori automatica
 * 
 * @param {string} url - URL relativo (es. '/api/voti')
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
 * @returns {Promise<object>} Dati utente e token
 */
export const login = async (username, password) => {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
};

// =============================================================================
// DASHBOARD API - Dati aggregati
// =============================================================================

/**
 * Ottiene dati dashboard per uno studente
 * 
 * @param {number} studenteId - ID dello studente
 * @returns {Promise<object>} Statistiche e dati dashboard
 */
export const getDashboardData = async (studenteId) => {
  return apiRequest(`/dashboard/${studenteId}`);
};

// =============================================================================
// STUDENTI API
// =============================================================================

/**
 * Ottiene lista di tutti gli studenti
 */
export const getStudenti = async () => {
  return apiRequest('/api/studenti');
};

/**
 * Ottiene dettagli di uno studente specifico
 */
export const getStudente = async (id) => {
  return apiRequest(`/api/studenti/${id}`);
};

// =============================================================================
// MATERIE API
// =============================================================================

/**
 * Ottiene lista di tutte le materie
 */
export const getMaterie = async () => {
  return apiRequest('/api/materie');
};

/**
 * Ottiene materia specifica
 */
export const getMateria = async (id) => {
  return apiRequest(`/api/materie/${id}`);
};

// =============================================================================
// VOTI API - CRUD completo
// =============================================================================

/**
 * Ottiene tutti i voti di uno studente
 * 
 * @param {number} studenteId - ID dello studente
 * @param {object} filtri - Filtri opzionali (materia, tipo, etc.)
 * @returns {Promise<Array>} Lista voti
 */
export const getVoti = async (studenteId, filtri = {}) => {
  const params = new URLSearchParams({ 
    studenteId: studenteId.toString(),
    ...filtri 
  });
  return apiRequest(`/api/voti?${params}`);
};

/**
 * Ottiene voti con informazioni complete delle materie
 */
export const getVotiCompleti = async (studenteId) => {
  return apiRequest(`/voti-completi/${studenteId}`);
};

/**
 * Aggiunge un nuovo voto
 * 
 * @param {object} voto - Dati del voto da aggiungere
 * @returns {Promise<object>} Voto creato
 */
export const addVoto = async (voto) => {
  return apiRequest('/api/voti', {
    method: 'POST',
    body: JSON.stringify(voto),
  });
};

/**
 * Aggiorna un voto esistente
 * 
 * @param {number} id - ID del voto
 * @param {object} voto - Dati aggiornati
 * @returns {Promise<object>} Voto aggiornato
 */
export const updateVoto = async (id, voto) => {
  return apiRequest(`/api/voti/${id}`, {
    method: 'PUT',
    body: JSON.stringify(voto),
  });
};

/**
 * Elimina un voto
 * 
 * @param {number} id - ID del voto da eliminare
 * @returns {Promise<object>} Conferma eliminazione
 */
export const deleteVoto = async (id) => {
  return apiRequest(`/api/voti/${id}`, {
    method: 'DELETE',
  });
};

// =============================================================================
// COMPITI API
// =============================================================================

/**
 * Ottiene compiti di uno studente
 * 
 * @param {number} studenteId - ID dello studente
 * @param {boolean} completato - Filtro per stato completamento
 * @returns {Promise<Array>} Lista compiti
 */
export const getCompiti = async (studenteId, completato = null) => {
  const params = new URLSearchParams({ studenteId: studenteId.toString() });
  if (completato !== null) {
    params.append('completato', completato.toString());
  }
  return apiRequest(`/api/compiti?${params}`);
};

/**
 * Aggiunge un nuovo compito
 */
export const addCompito = async (compito) => {
  return apiRequest('/api/compiti', {
    method: 'POST',
    body: JSON.stringify(compito),
  });
};

/**
 * Marca un compito come completato/non completato
 * 
 * @param {number} id - ID del compito
 * @param {boolean} completato - Stato di completamento
 * @returns {Promise<object>} Compito aggiornato
 */
export const toggleCompitoCompletato = async (id, completato) => {
  return apiRequest(`/api/compiti/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ completato }),
  });
};

// =============================================================================
// ASSENZE API
// =============================================================================

/**
 * Ottiene assenze di uno studente
 */
export const getAssenze = async (studenteId) => {
  return apiRequest(`/api/assenze?studenteId=${studenteId}`);
};

// =============================================================================
// COMUNICAZIONI API
// =============================================================================

/**
 * Ottiene tutte le comunicazioni
 */
export const getComunicazioni = async () => {
  return apiRequest('/api/comunicazioni');
};

/**
 * Marca una comunicazione come letta
 */
export const marcaComunicazioneLetta = async (id) => {
  return apiRequest(`/api/comunicazioni/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ letta: true }),
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

/**
 * Hook personalizzato per gestire loading states (da usare con React)
 * 
 * Esempio di utilizzo:
 * const { data, loading, error, refetch } = useApi(() => getVoti(1));
 */
export const createApiHook = (apiFunction) => {
  return (...args) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction(...args);
        setData(result);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    React.useEffect(() => {
      fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData };
  };
};

// =============================================================================
// ESEMPI PER GLI STUDENTI
// =============================================================================

/*
ESEMPI DI UTILIZZO NEI COMPONENTI:

1. LOGIN:
```jsx
import { login } from '../services/api';

const handleLogin = async (username, password) => {
  try {
    const result = await login(username, password);
    // Gestire successo
  } catch (error) {
    // Gestire errore
  }
};
```

2. CARICAMENTO VOTI:
```jsx
import { getVoti } from '../services/api';

useEffect(() => {
  const fetchVoti = async () => {
    try {
      const voti = await getVoti(studenteId);
      setVoti(voti);
    } catch (error) {
      setError(error.message);
    }
  };
  fetchVoti();
}, [studenteId]);
```

3. AGGIUNGERE VOTO:
```jsx
import { addVoto } from '../services/api';

const handleAggiungiVoto = async (nuovoVoto) => {
  try {
    const votoCreato = await addVoto(nuovoVoto);
    setVoti([...voti, votoCreato]);
  } catch (error) {
    alert('Errore: ' + error.message);
  }
};
```
*/
