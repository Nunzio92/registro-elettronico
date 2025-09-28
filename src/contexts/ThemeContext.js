/**
 * 🎯 TASK: Implementa il Context per il theming
 * 
 * Dovrai creare:
 * 1. Il Context e custom hook
 * 2. Il Provider con Material-UI ThemeProvider
 * 3. La gestione delle CSS Variables
 * 4. La persistenza delle preferenze tema
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Importa il CSS con le variabili (già fornito)
import '../styles/themes.css';

// 🎯 TASK 1: Crea il Context
// const ThemeContext = createContext();

// 🎯 TASK 2: Custom Hook
export const useTheme = () => {
  // 🎯 TASK: Implementa useContext con controllo errori
  throw new Error('useTheme non ancora implementato - Segui la guida step-by-step!');
};

// 🎯 TASK 3: Provider Component
export const CustomThemeProvider = ({ children }) => {
  // 🎯 TASK: State per tema scuro
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // 🎯 TASK: useEffect per caricare preferenze salvate
  // useEffect(() => {
  //   // Carica da localStorage
  // }, []);

  // 🎯 TASK: useEffect per applicare tema quando cambia
  // useEffect(() => {
  //   applyTheme(isDarkMode);
  // }, [isDarkMode]);

  // 🎯 TASK: Funzione per applicare tema al DOM
  const applyTheme = (isDark) => {
    // 🎯 TASK: Manipola document.documentElement
    // Se isDark: setAttribute('data-theme', 'dark')
    // Altrimenti: removeAttribute('data-theme')
    console.log('applyTheme non ancora implementato - Segui la guida step-by-step!');
  };

  // 🎯 TASK: Funzione toggle tema
  const toggleTheme = () => {
    // 🎯 TASK: Cambia state e salva in localStorage
    console.log('toggleTheme non ancora implementato - Segui la guida step-by-step!');
  };

  // 🎯 TASK: Tema Material-UI
  // const muiTheme = createTheme({
  //   palette: {
  //     mode: isDarkMode ? 'dark' : 'light',
  //   },
  // });

  // 🎯 TASK: Value object
  // const value = {
  //   isDarkMode,
  //   toggleTheme,
  //   applyTheme
  // };

  // 🎯 TASK: Return con Provider
  return (
    <div>
      {/* 🎯 TASK: Sostituisci con la struttura completa */}
      <p style={{ padding: '20px', color: 'orange' }}>
        ⚠️ CustomThemeProvider non ancora implementato - Segui la guida step-by-step!
      </p>
      {children}
    </div>
  );
};