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
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#fff3cd', 
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>🎯 TASK: ProtectedRoute non ancora implementato</h3>
        <p>Segui la guida step-by-step per implementare la protezione delle rotte!</p>
      </div>
      {children}
    </div>
  );
};

export default ProtectedRoute;