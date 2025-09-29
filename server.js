/**
 * Server JSON personalizzato per il Registro Elettronico
 * 
 * Questo file configura json-server con:
 * - CORS per permettere chiamate dal frontend
 * - Routes personalizzate per login
 * - Middleware per logging
 * - Custom endpoints educativi
 * 
 * JSON Server docs: https://github.com/typicode/json-server
 */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORS per permettere chiamate dal frontend React (porta 3000)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware per parsing JSON
server.use(jsonServer.bodyParser);
server.use(middlewares);

/**
 * Endpoint di LOGIN semplificato
 * POST /auth/login
 * Body: { username, password }
 * Risponde con dati utente se credenziali corrette
 */
server.post('/auth/login', (req, res) => {
  console.log('🔐 Tentativo di login:', req.body);
  
  const { username, password } = req.body;
  const db = router.db; // Accesso al database JSON
  
  // Cerca utente nelle tabelle studenti e professori
  const studente = db.get('studenti').find({ username, password }).value();
  
  if (studente) {
    // Rimuovi password dalla risposta per sicurezza
    const { password: _, ...userData } = studente;
    
    console.log('✅ Login riuscito per:', username);
    res.json({
      success: true,
      user: { ...userData, ruolo: 'studente' },
      token: 'mock-jwt-token-' + Date.now() // Token fittizio per scopi educativi
    });
  } else {
    console.log('❌ Login fallito per:', username);
    res.status(401).json({
      success: false,
      error: 'Credenziali non valide'
    });
  }
});

/**
 * Middleware per logging delle richieste 
 * TODO: Implementare middleware di autenticazione quando necessario
 */
// server.use((req, res, next) => {
//   const timestamp = new Date().toLocaleString('it-IT');
//   console.log(`[${timestamp}] ${req.method} ${req.url}`);
//   next();
// });

// Usa le routes predefinite di JSON Server per tutto il resto
server.use('/api', router);

// Avvia server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log('🚀 API Server avviato su porta', PORT);
  console.log('🎯 API Base: http://localhost:' + PORT + '/api');
  console.log('🔐 Login endpoint: POST http://localhost:' + PORT + '/auth/login');
});
