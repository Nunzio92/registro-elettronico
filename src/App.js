/**
 * 🔐 App.js - Componente Principale
 * TODO: Implementare useState e conditional rendering per login
 */

import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Chip,
  ThemeProvider
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import theme from './theme';

// TODO: Importare useState da 'react' - https://react.dev/reference/react/useState
// TODO: Importare LoginForm da './components/LoginForm'
// TODO: Importare WelcomePage da './components/WelcomePage'

// Componente di benvenuto con Material-UI
const Welcome = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
      
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        🚀 Registro Elettronico With a change!
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        Implementa il sistema di login seguendo i TODO nei file.
      </Typography>
      
      <Typography variant="body2" sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
        <strong>Credenziali test:</strong> studente / password
      </Typography>
    </Paper>
  </Container>
);

function App() {
  // TODO: const [user, setUser] = useState(null);
  
  const handleLogin = (userData) => {
    // TODO: setUser(userData);
  };

  const handleLogout = () => {
    // TODO: setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* TODO: Sostituire con: {!user ? <LoginForm onLoginSuccess={handleLogin} /> : <WelcomePage user={user} onLogout={handleLogout} />} */}
      <Welcome />
    </ThemeProvider>
  );
}

export default App;