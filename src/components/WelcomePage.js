/**
 * 🎉 WelcomePage - TODO: Mostrare dati utente e pulsante logout
 */

import React from 'react';
import { Container, Typography } from '@mui/material';
// TODO: Importare Paper, Button, Box da '@mui/material' - https://mui.com/material-ui/

const WelcomePage = ({ user, onLogout }) => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>👋 Benvenuto!</Typography>
      {/* TODO: Mostrare user.nome, user.cognome, user.classe */}
      {/* TODO: Aggiungere Button logout che chiama onLogout */}
      <Typography variant="body1" sx={{ mt: 3 }}>
        ✅ Login implementato con successo!
      </Typography>
    </Container>
  );
};

export default WelcomePage;
