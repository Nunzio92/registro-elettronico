/**
 * Componente principale dell'applicazione Registro Elettronico
 * 
 * Questo file configura:
 * - Routing dell'applicazione con React Router
 * - Context Providers per stato globale (autenticazione e tema)
 * - Struttura generale dell'app
 * 
 * Documentazione React: https://react.dev/learn
 * React Router: https://reactrouter.com/en/main/start/tutorial
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContextAPI';
import { CustomThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ThemeExample from './components/ThemeExample';

/**
 * Componente App - Root component dell'applicazione
 * 
 * Pattern utilizzato: Provider Pattern per condividere stato globale
 * https://react.dev/reference/react/createContext#provider
 */
function App() {
  return (
    // CustomThemeProvider: Gestisce il tema dark/light dell'app
    <CustomThemeProvider>
      {/* AuthProvider: Gestisce l'autenticazione dell'utente */}
      <AuthProvider>
        {/* Router: Abilita la navigazione tra pagine */}
        <Router>
          {/* Routes: Definisce le rotte dell'applicazione */}
          <Routes>
            {/* Rotta pubblica per il login */}
            <Route path="/login" element={<LoginForm />} />
            
            {/* Rotte protette - richiedono autenticazione */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Rotta per esempi CSS Variables */}
            <Route path="/theme-example" element={
              <ProtectedRoute>
                <Layout>
                  <ThemeExample />
                </Layout>
              </ProtectedRoute>
            } />
            
            {/* Redirect automatico alla dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App;
