/**
 * 🎯 STARTER TEMPLATE: Registro Elettronico con Material-UI
 * 
 * Questo è il tuo punto di partenza! 
 * Costruirai un'app React completa step-by-step usando Material-UI.
 * 
 * 📚 Cosa imparerai:
 * ✅ Componenti React con Material-UI
 * ✅ useState per dati interattivi  
 * ✅ Props e comunicazione tra componenti
 * ✅ Liste dinamiche e form controllati
 */

import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Chip
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

// Componente di benvenuto con Material-UI
const Welcome = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
      
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        🚀 Registro Elettronico
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Benvenuto nel corso React! Costruirai questa app step-by-step.
      </Typography>
      
      <Box sx={{ mt: 3, mb: 3 }}>
        <Chip 
          label="✅ Material-UI Setup Completato" 
          color="success" 
          sx={{ mr: 1, mb: 1 }} 
        />
        <Chip 
          label="🎯 Pronto per Step 1" 
          color="primary" 
          sx={{ mr: 1, mb: 1 }} 
        />
      </Box>
      
      <Paper sx={{ p: 3, bgcolor: 'grey.50', mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          📋 Il Tuo Piano di Sviluppo:
        </Typography>
        <Box component="ol" sx={{ textAlign: 'left', pl: 2 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            <strong>Step 1:</strong> Crea il componente StudenteCard
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            <strong>Step 2:</strong> Aggiungi useState per interattività
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            <strong>Step 3:</strong> Crea lista dinamica di studenti
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            <strong>Step 4:</strong> Implementa form per aggiungere studenti
          </Typography>
          <Typography component="li">
            <strong>Step 5:</strong> Collega tutto insieme!
          </Typography>
        </Box>
      </Paper>
    </Paper>
  </Container>
);

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;