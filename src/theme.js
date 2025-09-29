/**
 * 🎨 Theme Material UI - Configurazione Statica
 * Setup semplice per principianti
 */

import { createTheme } from '@mui/material/styles';

// Tema personalizzato per il registro elettronico
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blu educativo
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e', // Rosa accento
      light: '#ff5983',
      dark: '#9a0036',
    },
    success: {
      main: '#2e7d32', // Verde per voti positivi
    },
    warning: {
      main: '#ed6c02', // Arancione per avvisi
    },
    error: {
      main: '#d32f2f', // Rosso per errori/assenze
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
  // components: {
  //   // Personalizzazioni componenti
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //         textTransform: 'none', // Rimuove MAIUSCOLO automatico
  //         fontWeight: 500,
  //       },
  //     },
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 12,
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         '& .MuiOutlinedInput-root': {
  //           borderRadius: 8,
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
