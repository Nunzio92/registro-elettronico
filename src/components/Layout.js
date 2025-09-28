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
    console.log('handleLogout non implementato - Segui la guida step-by-step!');
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
          <Button color="inherit" disabled>
            🎯 Dashboard
          </Button>
          <Button color="inherit" disabled>
            🎯 Settings
          </Button>
          
          <Button color="inherit" onClick={handleLogout}>
            🎯 TASK: Implementa logout
          </Button>
        </Toolbar>
      </AppBar>
      
      {/* Messaggio informativo */}
      <Box sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
        <Typography variant="body2" color="primary">
          🎯 TASK: Layout non ancora completo - Implementa navigazione e logout seguendo la guida!
        </Typography>
      </Box>
      
      {/* 🎯 TASK: Area contenuto principale */}
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;