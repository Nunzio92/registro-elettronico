/**
 * Dashboard - Pagina principale dell'applicazione
 * 
 * Questa è una dashboard semplificata che mostra solo il titolo.
 * Potrai espandere questa pagina in futuro con funzionalità aggiuntive
 * come statistiche, grafici, liste di voti, compiti, ecc.
 */

import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh',
      textAlign: 'center'
    }}>
      <div>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2
          }}
        >
          DASHBOARD
        </Typography>
        <Typography 
          variant="h6" 
          color="textSecondary"
        >
          Benvenuto nella tua dashboard del registro elettronico
        </Typography>
        <Typography 
          variant="body2" 
          color="textSecondary"
          sx={{ mt: 1 }}
        >
          Questa pagina potrà essere espansa in futuro con statistiche e funzionalità avanzate
        </Typography>
      </div>
    </Box>
  );
};

export default Dashboard;