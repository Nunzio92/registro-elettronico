/**
 * 🔐 LoginForm - Form di autenticazione con Material-UI
 * 
 * STEP 1: Form Base
 * - Importare useState e componenti Material-UI
 * - Creare stato per formData
 * - Implementare handleInputChange
 * - Creare JSX con Paper, TextField, Button
 * 
 * STEP 2: API Service (implementare prima in api.js)
 * 
 * STEP 3: Collegare Form e API
 * - Importare login e getErrorMessage
 * - Aggiungere stato error
 * - Implementare handleSubmit con try/catch
 * - Aggiungere Alert per errori
 */

import React from 'react';
import { Container, Typography } from '@mui/material';
// STEP 1: Importare useState da 'react'
// STEP 1: Importare Paper, TextField, Button, Box da '@mui/material'
// STEP 3: Importare Alert da '@mui/material'
// STEP 3: Importare login, getErrorMessage da '../services/api'

const LoginForm = ({ onLoginSuccess }) => {
  // STEP 1: Creare stato per formData (oggetto con username e password)
  
  // STEP 3: Creare stato per error (stringa vuota inizialmente)

  // STEP 1: Handler per aggiornare lo stato quando l'utente digita
  const handleInputChange = (e) => {
    // Usare spread operator per aggiornare il campo specifico
  };

  // STEP 3: Handler per l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il reload della pagina
    // Reset errori, chiamare login in try/catch, gestire successo/errore
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* STEP 1: Sostituire questo contenuto con Paper + form completo */}
      <Typography variant="h4" gutterBottom>🔐 Login</Typography>
      
      {/* STEP 1: Creare Paper con elevation e padding */}
      {/* STEP 1: Dentro Paper, usare <Box component="form" onSubmit={handleSubmit}> */}
      {/* STEP 1: TextField per username con name, value, onChange, fullWidth */}
      {/* STEP 1: TextField per password con type="password" e stesse props */}
      {/* STEP 1: Button type="submit" variant="contained" fullWidth */}
      
      {/* STEP 3: Aggiungere Alert condizionale per errori */}
      
      <Typography variant="body2" sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
        <strong>Credenziali test:</strong> studente / password
      </Typography>
    </Container>
  );
};

export default LoginForm;
