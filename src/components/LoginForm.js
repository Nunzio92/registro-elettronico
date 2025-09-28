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
    console.log('handleChange non implementato - Segui la guida step-by-step!');
  };

  // 🎯 TASK: Handler per submit
  const handleSubmit = (e) => {
    // 🎯 TASK: preventDefault, chiamata login, gestione risultato
    e.preventDefault();
    console.log('handleSubmit non implementato - Segui la guida step-by-step!');
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
                helperText="Implementa useState per gestire questo campo"
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
                helperText="Implementa useState per gestire questo campo"
              />
              
              {/* 🎯 TASK: Alert per errori */}
              <Alert severity="info" sx={{ mt: 2 }}>
                🎯 TASK: Implementa gestione errori con useState
              </Alert>
              
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