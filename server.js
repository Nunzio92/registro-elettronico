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
const middlewares = jsonServer.defaults({
  static: './public'
});

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

// CUSTOM ROUTES EDUCATIVE

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
 * Endpoint per ottenere dashboard dati dello studente
 * GET /dashboard/:studenteId
 * Aggrega dati da più tabelle
 */
server.get('/dashboard/:studenteId', (req, res) => {
  const studenteId = parseInt(req.params.studenteId);
  const db = router.db;
  
  console.log('📊 Richiesta dashboard per studente:', studenteId);
  
  // Raccogli dati da più tabelle
  const voti = db.get('voti').filter({ studenteId }).value();
  const compiti = db.get('compiti').filter({ studenteId }).value();
  const assenze = db.get('assenze').filter({ studenteId }).value();
  const comunicazioni = db.get('comunicazioni').value();
  
  // Calcola statistiche
  const mediaGenerale = voti.length > 0 
    ? (voti.reduce((sum, v) => sum + v.voto, 0) / voti.length).toFixed(2)
    : 0;
    
  const compitiInScadenza = compiti.filter(c => 
    !c.completato && new Date(c.dataConsegna) > new Date()
  ).length;
  
  const comunicazioniNonLette = comunicazioni.filter(c => !c.letta).length;
  
  res.json({
    statistiche: {
      mediaGenerale: parseFloat(mediaGenerale),
      totaleVoti: voti.length,
      compitiInScadenza,
      assenzeTotali: assenze.length,
      comunicazioniNonLette
    },
    ultimiVoti: voti.slice(-5).reverse(), // Ultimi 5 voti
    prossimiCompiti: compiti.filter(c => !c.completato).slice(0, 3),
    comunicazioniRecenti: comunicazioni.slice(-3).reverse()
  });
});

/**
 * Endpoint per voti con join di materie
 * GET /voti-completi/:studenteId
 * Include nome materia nei voti
 */
server.get('/voti-completi/:studenteId', (req, res) => {
  const studenteId = parseInt(req.params.studenteId);
  const db = router.db;
  
  const voti = db.get('voti').filter({ studenteId }).value();
  const materie = db.get('materie').value();
  
  // Join manuale tra voti e materie
  const votiConMaterie = voti.map(voto => ({
    ...voto,
    materia: materie.find(m => m.id === voto.materiaId)
  }));
  
  res.json(votiConMaterie);
});

/**
 * Middleware per logging delle richieste (educativo)
 */
server.use((req, res, next) => {
  const timestamp = new Date().toLocaleString('it-IT');
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Usa le routes predefinite di JSON Server per tutto il resto
server.use('/api', router);

// Avvia server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log('🚀 JSON Server avviato su porta', PORT);
  console.log('📖 API docs: http://localhost:' + PORT);
  console.log('🎯 Database: http://localhost:' + PORT + '/api');
  console.log('🔐 Login endpoint: POST http://localhost:' + PORT + '/auth/login');
  console.log('📊 Dashboard endpoint: GET http://localhost:' + PORT + '/dashboard/:id');
  console.log('\n📚 Esempi di utilizzo:');
  console.log('- GET /api/studenti - Lista studenti');
  console.log('- GET /api/materie - Lista materie');
  console.log('- GET /api/voti?studenteId=1 - Voti dello studente 1');
  console.log('- POST /auth/login - Login con username/password');
});
