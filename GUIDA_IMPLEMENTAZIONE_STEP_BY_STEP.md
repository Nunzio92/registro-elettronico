# 🚀 Guida Implementazione Step-by-Step
## Costruiamo il Registro Elettronico da Zero!

---

## 🎯 Obiettivo

In questa guida implementerai **da zero** tutte le funzionalità del registro elettronico, partendo da un progetto quasi vuoto. Ogni step ti guiderà nella creazione di una specifica funzionalità, spiegando i concetti React mentre li applichi.

---

## 📋 Cosa Costruiremo

Al termine avrai implementato:
- ✅ Sistema di autenticazione completo
- ✅ Context API per stato globale  
- ✅ Routing multi-pagina con protezione
- ✅ Theming dinamico (dark/light mode)
- ✅ Dashboard con statistiche
- ✅ Layout responsive con navigazione
- ✅ Integrazione con API backend

---

## 🛠️ Setup Iniziale

### 1. Preparazione Progetto Starter

Prima di iniziare, creeremo una versione "pulita" del progetto:

```bash
# 1. Backup del progetto completo
cp -r src src_completo

# 2. Creeremo file starter vuoti
# (l'insegnante preparerà questi file)
```

### 2. Struttura File Starter

```
src/
├── components/
│   ├── LoginForm.js          # 🔴 DA IMPLEMENTARE
│   ├── Layout.js             # 🔴 DA IMPLEMENTARE  
│   └── ProtectedRoute.js     # 🔴 DA IMPLEMENTARE
├── contexts/
│   ├── AuthContext.js        # 🔴 DA IMPLEMENTARE
│   └── ThemeContext.js       # 🔴 DA IMPLEMENTARE
├── pages/
│   ├── Dashboard.js          # 🔴 DA IMPLEMENTARE
│   └── Settings.js           # 🔴 DA IMPLEMENTARE
├── services/
│   └── api.js               # ✅ GIÀ FORNITO
├── styles/
│   ├── components.css       # ✅ GIÀ FORNITO
│   └── themes.css          # ✅ GIÀ FORNITO
├── App.js                  # 🔴 DA IMPLEMENTARE
└── index.js                # ✅ GIÀ FORNITO
```

---

## 📅 GIORNO 1: Autenticazione e Context

### 🎯 Step 1: Primo Componente React (30 min)

**Obiettivo**: Creare il primo componente e capire JSX

**File da creare**: `src/components/Benvenuto.js`

```jsx
// 🎯 TASK: Crea questo componente da zero
import React from 'react';

const Benvenuto = ({ nomeStudente, classe }) => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #1976d2',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '20px'
    }}>
      <h1>🎓 Benvenuto nel Registro Elettronico!</h1>
      <p><strong>Studente:</strong> {nomeStudente}</p>
      <p><strong>Classe:</strong> {classe}</p>
      <p>Oggi imparerai a costruire un'app React completa!</p>
    </div>
  );
};

export default Benvenuto;
```

**🎯 TASK per te:**
1. Crea il file `src/components/Benvenuto.js`
2. Implementa il componente seguendo l'esempio
3. Modifica `src/App.js` per usare il componente:

```jsx
// src/App.js - VERSIONE TEMPORANEA
import React from 'react';
import Benvenuto from './components/Benvenuto';

function App() {
  return (
    <div>
      <Benvenuto 
        nomeStudente="Il Tuo Nome" 
        classe="5A Informatica" 
      />
    </div>
  );
}

export default App;
```

**✅ Checkpoint**: Dovresti vedere il messaggio di benvenuto nel browser!

---

### 🎯 Step 2: AuthContext - Stato Globale (45 min)

**Obiettivo**: Implementare il Context API per gestire l'autenticazione

**File da implementare**: `src/contexts/AuthContext.js`

```jsx
// 🎯 TASK: Implementa questo Context da zero
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Crea il Context
const AuthContext = createContext();

// 2. Custom Hook per usare il Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere usato dentro AuthProvider');
  }
  return context;
};

// 3. Provider Component
export const AuthProvider = ({ children }) => {
  // 🎯 TASK: Implementa questi state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🎯 TASK: Implementa useEffect per caricare utente salvato
  useEffect(() => {
    // Carica utente dal localStorage se esiste
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 🎯 TASK: Implementa funzione di login
  const login = (username, password) => {
    // Simulazione login semplice
    if (username === 'studente' && password === 'password') {
      const userData = { 
        username, 
        role: 'studente',
        nome: 'Mario Rossi',
        classe: '5A'
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Credenziali non valide' };
  };

  // 🎯 TASK: Implementa funzione di logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // 🎯 TASK: Crea l'oggetto value da condividere
  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

**🎯 TASK per te:**
1. Crea il file `src/contexts/AuthContext.js`
2. Implementa il codice seguendo i commenti `🎯 TASK`
3. Testa il Context creando un componente di test

**Test Component** (crea `src/components/AuthTest.js`):
```jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthTest = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  const handleLogin = () => {
    const result = login('studente', 'password');
    console.log('Login result:', result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Test Autenticazione</h2>
      <p>Utente loggato: {isAuthenticated ? 'SÌ' : 'NO'}</p>
      {user && <p>Benvenuto: {user.nome}</p>}
      
      <button onClick={handleLogin}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthTest;
```

**✅ Checkpoint**: I bottoni Login/Logout devono funzionare!

---

### 🎯 Step 3: LoginForm - Form Controllati (45 min)

**Obiettivo**: Creare un form di login con Material-UI

**File da implementare**: `src/components/LoginForm.js`

```jsx
// 🎯 TASK: Implementa questo form da zero
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

const LoginForm = () => {
  // 🎯 TASK: Implementa state per le credenziali
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  // 🎯 TASK: Implementa state per errori
  const [error, setError] = useState('');
  
  // 🎯 TASK: Usa i hook necessari
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // 🎯 TASK: Implementa useEffect per redirect se già loggato
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  // 🎯 TASK: Implementa handler per cambiamenti input
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // 🎯 TASK: Implementa handler per submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(credentials.username, credentials.password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SchoolIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
            
            <Typography component="h1" variant="h4" gutterBottom>
              Registro Elettronico
            </Typography>
            
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
              Accedi con le tue credenziali
            </Typography>
            
            {/* 🎯 TASK: Implementa il form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome utente"
                name="username"
                autoComplete="username"
                autoFocus
                value={credentials.username}
                onChange={handleChange}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange}
              />
              
              {/* 🎯 TASK: Mostra errore se presente */}
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Accedi
              </Button>
              
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
```

**🎯 TASK per te:**
1. Crea il file `src/components/LoginForm.js`
2. Implementa il codice seguendo i commenti `🎯 TASK`
3. Testa il form (per ora senza routing)

**✅ Checkpoint**: Il form deve accettare input e mostrare errori!

---

### 🎯 Step 4: ProtectedRoute - Protezione Rotte (30 min)

**Obiettivo**: Creare un componente per proteggere le rotte

**File da implementare**: `src/components/ProtectedRoute.js`

```jsx
// 🎯 TASK: Implementa questo componente da zero
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  // 🎯 TASK: Usa il hook useAuth
  const { isAuthenticated, loading } = useAuth();

  // 🎯 TASK: Mostra loading se sta caricando
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  // 🎯 TASK: Redirect a login se non autenticato, altrimenti mostra children
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
```

**🎯 TASK per te:**
1. Crea il file `src/components/ProtectedRoute.js`
2. Implementa il codice seguendo i commenti `🎯 TASK`

---

### 🎯 Step 5: App.js con Routing (30 min)

**Obiettivo**: Configurare il routing dell'applicazione

**File da implementare**: `src/App.js`

```jsx
// 🎯 TASK: Implementa il routing completo
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';

// Componenti temporanei per le pagine (li implementeremo dopo)
const Dashboard = () => <div style={{padding: '20px'}}><h1>Dashboard - DA IMPLEMENTARE</h1></div>;
const Settings = () => <div style={{padding: '20px'}}><h1>Settings - DA IMPLEMENTARE</h1></div>;

function App() {
  return (
    // 🎯 TASK: Wrappa tutto con AuthProvider
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🎯 TASK: Rotta pubblica per login */}
          <Route path="/login" element={<LoginForm />} />
          
          {/* 🎯 TASK: Rotte protette */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* 🎯 TASK: Redirect automatico */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

**🎯 TASK per te:**
1. Modifica `src/App.js` seguendo i commenti `🎯 TASK`
2. Testa il routing: login → dashboard

**✅ Checkpoint Fine Giorno 1**: 
- Login funzionante ✅
- Routing con protezione ✅
- Context API implementato ✅

---

## 📅 GIORNO 2: Theming, Layout e Dashboard

### 🎯 Step 6: ThemeContext - CSS Variables (45 min)

**Obiettivo**: Implementare il sistema di temi con CSS Variables

**File da implementare**: `src/contexts/ThemeContext.js`

```jsx
// 🎯 TASK: Implementa il ThemeContext da zero
import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Importa CSS con variabili (già fornito)
import '../styles/themes.css';

// 🎯 TASK: Crea il Context
const ThemeContext = createContext();

// 🎯 TASK: Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve essere usato dentro CustomThemeProvider');
  }
  return context;
};

// 🎯 TASK: Provider Component
export const CustomThemeProvider = ({ children }) => {
  // 🎯 TASK: State per tema scuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🎯 TASK: Carica preferenze salvate
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
      applyTheme(isDark);
    }
  }, []);

  // 🎯 TASK: Applica tema quando cambia state
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  // 🎯 TASK: Funzione per applicare tema al DOM
  const applyTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  // 🎯 TASK: Funzione per cambiare tema
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  // 🎯 TASK: Tema Material-UI
  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  // 🎯 TASK: Value object
  const value = {
    isDarkMode,
    toggleTheme,
    applyTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
```

**🎯 TASK per te:**
1. Crea il file `src/contexts/ThemeContext.js`
2. Implementa seguendo i commenti `🎯 TASK`
3. Aggiorna `App.js` per usare il ThemeProvider:

```jsx
// Aggiungi in App.js
import { CustomThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        {/* resto del codice */}
      </AuthProvider>
    </CustomThemeProvider>
  );
}
```

---

### 🎯 Step 7: Layout - Navigazione (45 min)

**Obiettivo**: Creare il layout principale con navigazione

**File da implementare**: `src/components/Layout.js`

```jsx
// 🎯 TASK: Implementa il Layout da zero
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton
} from '@mui/material';
import {
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  // 🎯 TASK: Usa i hook necessari
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🎯 TASK: Handler per logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 🎯 TASK: AppBar con navigazione */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Registro Elettronico - {user?.nome || user?.username}
          </Typography>
          
          {/* 🎯 TASK: Bottoni di navigazione */}
          <IconButton
            color="inherit"
            onClick={() => navigate('/dashboard')}
            disabled={location.pathname === '/dashboard'}
          >
            <DashboardIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            onClick={() => navigate('/settings')}
            disabled={location.pathname === '/settings'}
          >
            <SettingsIcon />
          </IconButton>
          
          {/* 🎯 TASK: Bottone logout */}
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            Esci
          </Button>
        </Toolbar>
      </AppBar>
      
      {/* 🎯 TASK: Contenuto principale */}
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
```

**🎯 TASK per te:**
1. Crea il file `src/components/Layout.js`
2. Implementa seguendo i commenti `🎯 TASK`
3. Aggiorna `App.js` per usare il Layout nelle rotte protette

---

### 🎯 Step 8: Dashboard - Componente Complesso (60 min)

**Obiettivo**: Creare la dashboard con statistiche e dati

**File da implementare**: `src/pages/Dashboard.js`

```jsx
// 🎯 TASK: Implementa la Dashboard completa
import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Grade as GradeIcon,
  Schedule as ScheduleIcon,
  Announcement as AnnouncementIcon
} from '@mui/icons-material';

const Dashboard = () => {
  // 🎯 TASK: Dati mock per la dashboard
  const mockData = {
    voti: [
      { materia: 'Matematica', voto: 8, data: '2024-01-15' },
      { materia: 'Italiano', voto: 7, data: '2024-01-14' },
      { materia: 'Storia', voto: 9, data: '2024-01-12' },
      { materia: 'Inglese', voto: 6, data: '2024-01-10' }
    ],
    compiti: [
      { materia: 'Inglese', descrizione: 'Esercizi pagina 45-47', scadenza: '2024-01-20' },
      { materia: 'Scienze', descrizione: 'Relazione esperimento', scadenza: '2024-01-22' },
      { materia: 'Matematica', descrizione: 'Problemi geometria', scadenza: '2024-01-25' }
    ]
  };

  // 🎯 TASK: Componente StatCard riutilizzabile
  const StatCard = ({ title, value, icon, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
          </Box>
          <Box sx={{ color: `${color}.main` }}>
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  // 🎯 TASK: Calcola media voti
  const mediaVoti = mockData.voti.reduce((sum, voto) => sum + voto.voto, 0) / mockData.voti.length;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Studente
      </Typography>
      
      {/* 🎯 TASK: Grid delle statistiche */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Media Voti"
            value={mediaVoti.toFixed(1)}
            icon={<GradeIcon sx={{ fontSize: 40 }} />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Compiti"
            value={mockData.compiti.length}
            icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Ore Presenza"
            value="156/160"
            icon={<ScheduleIcon sx={{ fontSize: 40 }} />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Comunicazioni"
            value="3"
            icon={<AnnouncementIcon sx={{ fontSize: 40 }} />}
            color="error"
          />
        </Grid>
      </Grid>

      {/* 🎯 TASK: Sezione voti e compiti */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ultimi Voti
              </Typography>
              {/* 🎯 TASK: Map per renderizzare voti */}
              {mockData.voti.map((voto, index) => (
                <Box key={index} display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="body1">{voto.materia}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Chip
                      label={voto.voto}
                      color={voto.voto >= 8 ? 'success' : voto.voto >= 6 ? 'primary' : 'error'}
                      size="small"
                    />
                    <Typography variant="body2" color="textSecondary">
                      {voto.data}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small">Vedi tutti i voti</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compiti in Scadenza
              </Typography>
              {/* 🎯 TASK: Map per renderizzare compiti */}
              {mockData.compiti.map((compito, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">{compito.materia}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {compito.descrizione}
                  </Typography>
                  <Typography variant="caption" color="warning.main">
                    Scadenza: {compito.scadenza}
                  </Typography>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small">Vedi tutti i compiti</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
```

**🎯 TASK per te:**
1. Crea il file `src/pages/Dashboard.js`
2. Implementa seguendo i commenti `🎯 TASK`
3. Aggiorna `App.js` per importare la Dashboard vera

---

### 🎯 Step 9: Settings - Gestione Temi (30 min)

**Obiettivo**: Creare la pagina impostazioni con toggle tema

**File da implementare**: `src/pages/Settings.js`

```jsx
// 🎯 TASK: Implementa la pagina Settings
import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  // 🎯 TASK: Usa il ThemeContext
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Impostazioni
      </Typography>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Aspetto
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Tema Scuro"
                secondary="Attiva il tema scuro per ridurre l'affaticamento degli occhi"
              />
              <ListItemSecondaryAction>
                {/* 🎯 TASK: Switch per cambiare tema */}
                <FormControlLabel
                  control={
                    <Switch
                      checked={isDarkMode}
                      onChange={toggleTheme}
                      icon={<LightModeIcon />}
                      checkedIcon={<DarkModeIcon />}
                    />
                  }
                  label=""
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>
            Informazioni App
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Versione"
                secondary="1.0.0 - Sviluppata da te!"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tecnologie"
                secondary="React + Material-UI + CSS Variables"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Funzionalità Implementate"
                secondary="✅ Login ✅ Routing ✅ Context ✅ Theming ✅ Dashboard"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
```

**🎯 TASK per te:**
1. Crea il file `src/pages/Settings.js`
2. Implementa seguendo i commenti `🎯 TASK`
3. Testa il toggle del tema!

---

### 🎯 Step 10: Integrazione Finale (30 min)

**Obiettivo**: Collegare tutto e testare l'applicazione completa

**Aggiorna `src/App.js` finale:**

```jsx
// 🎯 VERSIONE FINALE di App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rotta pubblica */}
            <Route path="/login" element={<LoginForm />} />
            
            {/* Rotte protette con Layout */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App;
```

---

## 🎉 Congratulazioni!

Hai implementato da zero un'applicazione React completa! 

### ✅ Cosa Hai Costruito:

1. **🔐 Sistema di Autenticazione**
   - Context API per stato globale
   - Form controllati con validazione
   - Persistenza in localStorage

2. **🛣️ Routing Avanzato**
   - React Router con protezione rotte
   - Navigazione programmatica
   - Layout condiviso

3. **🎨 Theming Dinamico**
   - CSS Variables per performance
   - Toggle dark/light mode
   - Persistenza preferenze

4. **📊 Dashboard Interattiva**
   - Componenti riutilizzabili
   - Rendering di liste dinamiche
   - Layout responsive con Grid

5. **🏗️ Architettura Scalabile**
   - Separazione delle responsabilità
   - Custom Hooks per logica riutilizzabile
   - Struttura modulare

### 🚀 Prossimi Passi:

1. **Aggiungi Funzionalità**:
   - Integrazione con API reali
   - Gestione errori avanzata
   - Loading states

2. **Migliora l'UX**:
   - Animazioni e transizioni
   - Notifiche toast
   - Breadcrumb navigation

3. **Ottimizza Performance**:
   - React.memo per componenti
   - Lazy loading delle pagine
   - Code splitting

4. **Aggiungi Testing**:
   - Unit tests con Jest
   - Integration tests
   - E2E tests con Cypress

---

## 🎯 Checklist Finale

**Verifica che tutto funzioni:**

- [ ] Login con credenziali corrette
- [ ] Redirect automatico se già loggato
- [ ] Protezione rotte (prova ad accedere a /dashboard senza login)
- [ ] Navigazione tra Dashboard e Settings
- [ ] Toggle tema dark/light
- [ ] Logout e redirect a login
- [ ] Persistenza tema dopo refresh
- [ ] Dashboard mostra dati mock
- [ ] Layout responsive su mobile

**Se qualcosa non funziona:**
1. Controlla la console per errori
2. Verifica gli import/export
3. Assicurati che tutti i file siano salvati
4. Riavvia il server se necessario

---

**🏆 Complimenti! Sei ora uno sviluppatore React! 🎊**

*Hai appena costruito da zero un'applicazione web moderna utilizzando le migliori pratiche di React. Questo è solo l'inizio del tuo viaggio nello sviluppo frontend!*
