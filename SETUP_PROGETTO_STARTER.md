# 🛠️ Setup Progetto Starter per Studenti
## Guida per Preparare l'Ambiente di Sviluppo

---

## 🎯 Obiettivo

Creare una versione "starter" del progetto dove gli studenti implementeranno da zero tutte le funzionalità, partendo da file quasi vuoti con solo la struttura base e i commenti guida.

---

## 📋 Preparazione Pre-Corso (Per l'Insegnante)

### 1. Backup del Progetto Completo

```bash
# Nella cartella del progetto
cp -r src src_completo
cp -r . ../registro-elettronico-completo
```

### 2. Creare File Starter

Sostituisci i file esistenti con le versioni starter qui sotto:

---

## 📁 File Starter da Creare

### `src/App.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa il componente App principale
 * 
 * Dovrai:
 * 1. Importare tutti i componenti necessari
 * 2. Configurare il routing con React Router
 * 3. Wrappare con i Provider (Theme e Auth)
 * 4. Creare le rotte protette e pubbliche
 */

import React from 'react';
// 🎯 TASK: Importa BrowserRouter, Routes, Route, Navigate da 'react-router-dom'

// 🎯 TASK: Importa i Context Provider che creerai
// import { CustomThemeProvider } from './contexts/ThemeContext';
// import { AuthProvider } from './contexts/AuthContext';

// 🎯 TASK: Importa i componenti che creerai
// import ProtectedRoute from './components/ProtectedRoute';
// import Layout from './components/Layout';
// import LoginForm from './components/LoginForm';
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';

// Componente temporaneo per iniziare
const TemporaryWelcome = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>🚀 Benvenuto nel Corso React!</h1>
    <p>Inizia implementando i componenti seguendo la guida step-by-step</p>
    <p><strong>Primo step:</strong> Crea il componente Benvenuto</p>
  </div>
);

function App() {
  // 🎯 TASK: Sostituisci questo return con la struttura completa:
  // - CustomThemeProvider (esterno)
  // - AuthProvider  
  // - Router
  // - Routes con rotte pubbliche e protette
  
  return (
    <div>
      <TemporaryWelcome />
    </div>
  );
}

export default App;
```

### `src/contexts/AuthContext.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa il Context per l'autenticazione
 * 
 * Dovrai creare:
 * 1. Il Context con createContext()
 * 2. Il custom hook useAuth()
 * 3. Il Provider component AuthProvider
 * 4. Le funzioni login() e logout()
 * 5. La persistenza con localStorage
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// 🎯 TASK 1: Crea il Context
// const AuthContext = createContext();

// 🎯 TASK 2: Implementa il custom hook
export const useAuth = () => {
  // 🎯 TASK: Usa useContext per ottenere il context
  // 🎯 TASK: Aggiungi controllo errore se usato fuori dal Provider
  
  throw new Error('useAuth non ancora implementato');
};

// 🎯 TASK 3: Implementa il Provider
export const AuthProvider = ({ children }) => {
  // 🎯 TASK: Aggiungi state per user e loading
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // 🎯 TASK: useEffect per caricare utente salvato
  // useEffect(() => {
  //   // Carica da localStorage
  // }, []);

  // 🎯 TASK: Implementa funzione login
  const login = (username, password) => {
    // 🎯 TASK: Logica di login
    // Credenziali demo: studente/password
    // Salva in localStorage se successo
    
    console.log('Login non ancora implementato');
    return { success: false, error: 'Da implementare' };
  };

  // 🎯 TASK: Implementa funzione logout
  const logout = () => {
    // 🎯 TASK: Pulisci state e localStorage
    console.log('Logout non ancora implementato');
  };

  // 🎯 TASK: Crea l'oggetto value
  // const value = {
  //   user,
  //   login,
  //   logout,
  //   loading,
  //   isAuthenticated: !!user
  // };

  // 🎯 TASK: Return del Provider
  return (
    <div>
      {/* 🎯 TASK: Sostituisci con AuthContext.Provider */}
      <p>AuthProvider non ancora implementato</p>
      {children}
    </div>
  );
};
```

### `src/contexts/ThemeContext.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa il Context per il theming
 * 
 * Dovrai creare:
 * 1. Il Context e custom hook
 * 2. Il Provider con Material-UI ThemeProvider
 * 3. La gestione delle CSS Variables
 * 4. La persistenza delle preferenze tema
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Importa il CSS con le variabili (già fornito)
import '../styles/themes.css';

// 🎯 TASK 1: Crea il Context
// const ThemeContext = createContext();

// 🎯 TASK 2: Custom Hook
export const useTheme = () => {
  // 🎯 TASK: Implementa useContext con controllo errori
  throw new Error('useTheme non ancora implementato');
};

// 🎯 TASK 3: Provider Component
export const CustomThemeProvider = ({ children }) => {
  // 🎯 TASK: State per tema scuro
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // 🎯 TASK: useEffect per caricare preferenze salvate
  // useEffect(() => {
  //   // Carica da localStorage
  // }, []);

  // 🎯 TASK: useEffect per applicare tema quando cambia
  // useEffect(() => {
  //   applyTheme(isDarkMode);
  // }, [isDarkMode]);

  // 🎯 TASK: Funzione per applicare tema al DOM
  const applyTheme = (isDark) => {
    // 🎯 TASK: Manipola document.documentElement
    // Se isDark: setAttribute('data-theme', 'dark')
    // Altrimenti: removeAttribute('data-theme')
    console.log('applyTheme non ancora implementato');
  };

  // 🎯 TASK: Funzione toggle tema
  const toggleTheme = () => {
    // 🎯 TASK: Cambia state e salva in localStorage
    console.log('toggleTheme non ancora implementato');
  };

  // 🎯 TASK: Tema Material-UI
  // const muiTheme = createTheme({
  //   palette: {
  //     mode: isDarkMode ? 'dark' : 'light',
  //   },
  // });

  // 🎯 TASK: Value object
  // const value = {
  //   isDarkMode,
  //   toggleTheme,
  //   applyTheme
  // };

  // 🎯 TASK: Return con Provider
  return (
    <div>
      {/* 🎯 TASK: Sostituisci con la struttura completa */}
      <p>CustomThemeProvider non ancora implementato</p>
      {children}
    </div>
  );
};
```

### `src/components/LoginForm.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa il form di login
 * 
 * Dovrai:
 * 1. Creare state per credenziali e errori
 * 2. Implementare form controllati
 * 3. Gestire submit e validazione
 * 4. Integrare con AuthContext
 * 5. Navigazione dopo login
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
// 🎯 TASK: Importa useAuth e useNavigate
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // 🎯 TASK: State per le credenziali
  // const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  // 🎯 TASK: State per errori
  // const [error, setError] = useState('');
  
  // 🎯 TASK: Hook per auth e navigazione
  // const { login, isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  // 🎯 TASK: useEffect per redirect se già loggato
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/dashboard');
  //   }
  // }, [isAuthenticated, navigate]);

  // 🎯 TASK: Handler per cambiamenti input
  const handleChange = (e) => {
    // 🎯 TASK: Aggiorna state credentials
    console.log('handleChange non implementato');
  };

  // 🎯 TASK: Handler per submit
  const handleSubmit = (e) => {
    // 🎯 TASK: preventDefault, chiamata login, gestione risultato
    e.preventDefault();
    console.log('handleSubmit non implementato');
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
            
            {/* 🎯 TASK: Implementa il form completo */}
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              
              {/* 🎯 TASK: Campo username */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome utente"
                name="username"
                autoFocus
                // value={credentials.username}
                // onChange={handleChange}
                placeholder="🎯 TASK: Collega al state"
              />
              
              {/* 🎯 TASK: Campo password */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // value={credentials.password}
                // onChange={handleChange}
                placeholder="🎯 TASK: Collega al state"
              />
              
              {/* 🎯 TASK: Alert per errori */}
              {/* {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )} */}
              
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

### `src/components/ProtectedRoute.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa la protezione delle rotte
 * 
 * Dovrai:
 * 1. Controllare se l'utente è autenticato
 * 2. Mostrare loading durante il controllo
 * 3. Reindirizzare al login se non autenticato
 * 4. Mostrare i children se autenticato
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
// 🎯 TASK: Importa useAuth
// import { useAuth } from '../contexts/AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  // 🎯 TASK: Usa useAuth per ottenere isAuthenticated e loading
  // const { isAuthenticated, loading } = useAuth();

  // 🎯 TASK: Mostra loading se sta caricando
  // if (loading) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // 🎯 TASK: Redirect se non autenticato, altrimenti mostra children
  // return isAuthenticated ? children : <Navigate to="/login" replace />;

  // Versione temporanea
  return (
    <div style={{ padding: '20px' }}>
      <p>🎯 TASK: ProtectedRoute non ancora implementato</p>
      {children}
    </div>
  );
};

export default ProtectedRoute;
```

### `src/components/Layout.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa il layout principale
 * 
 * Dovrai:
 * 1. Creare AppBar con navigazione
 * 2. Mostrare informazioni utente
 * 3. Bottoni per navigare tra pagine
 * 4. Bottone logout
 * 5. Area principale per i children
 */

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
  Dashboard as DashboardIcon
} from '@mui/icons-material';
// 🎯 TASK: Importa useAuth, useNavigate, useLocation
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  // 🎯 TASK: Usa i hook necessari
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  // 🎯 TASK: Handler per logout
  const handleLogout = () => {
    // 🎯 TASK: Chiama logout e naviga a /login
    console.log('handleLogout non implementato');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 🎯 TASK: Implementa AppBar completa */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🎯 TASK: Registro Elettronico - {/* {user?.nome} */}
          </Typography>
          
          {/* 🎯 TASK: Bottoni di navigazione */}
          {/* Dashboard, Settings, Logout */}
          
          <Button color="inherit" onClick={handleLogout}>
            🎯 TASK: Implementa logout
          </Button>
        </Toolbar>
      </AppBar>
      
      {/* 🎯 TASK: Area contenuto principale */}
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
```

### `src/pages/Dashboard.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa la dashboard principale
 * 
 * Dovrai:
 * 1. Creare dati mock per voti e compiti
 * 2. Implementare componente StatCard riutilizzabile
 * 3. Creare grid responsive per le statistiche
 * 4. Renderizzare liste di voti e compiti con map()
 * 5. Aggiungere logica per colori condizionali
 */

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
  // 🎯 TASK: Crea dati mock
  const mockData = {
    voti: [
      // 🎯 TASK: Aggiungi array di voti con materia, voto, data
    ],
    compiti: [
      // 🎯 TASK: Aggiungi array di compiti con materia, descrizione, scadenza
    ]
  };

  // 🎯 TASK: Componente StatCard riutilizzabile
  const StatCard = ({ title, value, icon, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        {/* 🎯 TASK: Implementa layout della card */}
        <Typography>🎯 TASK: {title} - {value}</Typography>
      </CardContent>
    </Card>
  );

  // 🎯 TASK: Calcola media voti
  // const mediaVoti = mockData.voti.reduce(...) / mockData.voti.length;

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
            value="🎯 TASK"
            icon={<GradeIcon sx={{ fontSize: 40 }} />}
            color="success"
          />
        </Grid>
        {/* 🎯 TASK: Aggiungi altre 3 StatCard */}
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
              <p>🎯 TASK: Implementa lista voti con map()</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compiti in Scadenza
              </Typography>
              {/* 🎯 TASK: Map per renderizzare compiti */}
              <p>🎯 TASK: Implementa lista compiti con map()</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
```

### `src/pages/Settings.js` - Starter Version

```jsx
/**
 * 🎯 TASK: Implementa la pagina impostazioni
 * 
 * Dovrai:
 * 1. Integrare con ThemeContext
 * 2. Creare switch per toggle tema
 * 3. Mostrare informazioni app
 */

import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material';
// 🎯 TASK: Importa useTheme
// import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  // 🎯 TASK: Usa ThemeContext
  // const { isDarkMode, toggleTheme } = useTheme();

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
                secondary="🎯 TASK: Implementa toggle tema"
              />
              <ListItemSecondaryAction>
                {/* 🎯 TASK: Switch per tema */}
                <Switch 
                  // checked={isDarkMode}
                  // onChange={toggleTheme}
                  disabled
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          
          {/* 🎯 TASK: Aggiungi sezione informazioni */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
```

---

## 📋 Checklist Setup per l'Insegnante

### Prima del Corso:

- [ ] **Backup progetto completo**
  ```bash
  cp -r . ../registro-elettronico-completo
  ```

- [ ] **Sostituire file con versioni starter**
  - [ ] `src/App.js`
  - [ ] `src/contexts/AuthContext.js`
  - [ ] `src/contexts/ThemeContext.js`
  - [ ] `src/components/LoginForm.js`
  - [ ] `src/components/ProtectedRoute.js`
  - [ ] `src/components/Layout.js`
  - [ ] `src/pages/Dashboard.js`
  - [ ] `src/pages/Settings.js`

- [ ] **Mantenere file già pronti**
  - [ ] `src/services/api.js` (già completo)
  - [ ] `src/styles/themes.css` (già completo)
  - [ ] `src/styles/components.css` (già completo)
  - [ ] `src/index.js` (già completo)
  - [ ] `package.json` e dipendenze
  - [ ] `db.json` e `server.js`

- [ ] **Testare che il progetto si avvii**
  ```bash
  npm start
  # Dovrebbe mostrare la pagina "Benvenuto nel Corso React!"
  ```

### Durante il Corso:

- [ ] **Avere sempre a disposizione**
  - [ ] Versione completa per riferimento
  - [ ] File starter per copy-paste veloce
  - [ ] Soluzioni step-by-step pronte

- [ ] **Monitorare progressi studenti**
  - [ ] Verificare che ogni step funzioni prima di passare al successivo
  - [ ] Aiutare con errori di sintassi comuni
  - [ ] Assicurarsi che tutti tengano il passo

### Troubleshooting Comune:

**Errori frequenti degli studenti:**

1. **Import/Export sbagliati**
   ```jsx
   // ❌ Sbagliato
   import useAuth from '../contexts/AuthContext';
   
   // ✅ Corretto
   import { useAuth } from '../contexts/AuthContext';
   ```

2. **Dimenticare le dipendenze useEffect**
   ```jsx
   // ❌ Sbagliato
   useEffect(() => {
     console.log(user);
   }, []); // user non nelle dipendenze
   
   // ✅ Corretto
   useEffect(() => {
     console.log(user);
   }, [user]);
   ```

3. **Context usato fuori dal Provider**
   - Assicurarsi che i Provider wrappino correttamente i componenti

4. **State non aggiornato correttamente**
   ```jsx
   // ❌ Sbagliato
   setCredentials(credentials.username = newValue);
   
   // ✅ Corretto
   setCredentials({...credentials, username: newValue});
   ```

---

## 🎯 Vantaggi di Questo Approccio

### ✅ **Per gli Studenti:**
- **Apprendimento Attivo**: Scrivono ogni riga di codice
- **Comprensione Profonda**: Capiscono il "perché" di ogni scelta
- **Debugging Skills**: Imparano a risolvere errori reali
- **Soddisfazione**: Vedono crescere l'app step by step

### ✅ **Per l'Insegnante:**
- **Controllo Totale**: Ogni step è guidato e verificabile
- **Flessibilità**: Può adattare il ritmo alla classe
- **Engagement**: Studenti più coinvolti e attivi
- **Valutazione**: Facile vedere chi ha capito cosa

### ✅ **Per l'Apprendimento:**
- **Pratico**: Ogni concetto è immediatamente applicato
- **Progressivo**: Difficoltà crescente graduale
- **Realistico**: Lavorano su un progetto vero
- **Trasferibile**: Skills applicabili ad altri progetti

---

**🚀 Buona fortuna con il corso! Gli studenti impareranno React costruendo qualcosa di concreto e utile!**
