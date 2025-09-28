/**
 * Context per la gestione del tema dell'applicazione con CSS Variables
 * 
 * Implementa un sistema di theming moderno utilizzando CSS Custom Properties
 * invece di ricreare il tema Material-UI ad ogni cambio.
 * 
 * Vantaggi delle CSS Variables:
 * - Performance migliore (no re-render completo dei componenti)
 * - Più semplice da capire per gli studenti
 * - Supporto browser nativo
 * - Transizioni CSS smooth
 * - Facile da estendere con nuovi temi
 * 
 * Concetti utilizzati:
 * - CSS Custom Properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 * - Context API: https://react.dev/reference/react/createContext
 * - Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks
 * - DOM manipulation: document.documentElement.setAttribute
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Importa il file CSS con le variabili del tema
import '../styles/themes.css';

// Context per condividere le preferenze del tema
const ThemeContext = createContext();

/**
 * Custom Hook per utilizzare il context del tema
 * 
 * Fornisce accesso alle funzioni e stato del tema
 * in qualsiasi componente dell'applicazione
 * 
 * @returns {Object} Oggetto con isDarkMode e toggleTheme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve essere utilizzato all\'interno di CustomThemeProvider');
  }
  return context;
};

/**
 * Provider Component per il tema con CSS Variables
 * 
 * Gestisce:
 * - Stato del tema corrente (dark/light)
 * - Persistenza delle preferenze utente
 * - Applicazione del tema tramite data-theme attribute
 * - Mantenimento di Material-UI per i componenti che lo richiedono
 * 
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componenti figli
 */
export const CustomThemeProvider = ({ children }) => {
  // State per tracciare se il tema dark è attivo
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Effect per caricare le preferenze tema dal localStorage e applicare il tema
   * 
   * Si esegue solo al mount del componente per ripristinare
   * le preferenze dell'utente dalle sessioni precedenti
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
      applyTheme(isDark);
    }
  }, []);

  /**
   * Effect per applicare il tema quando cambia lo stato
   * 
   * Questo effect si attiva ogni volta che isDarkMode cambia
   * e applica il tema corrispondente al DOM
   */
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  /**
   * Funzione per applicare il tema al DOM
   * 
   * Utilizza l'attributo data-theme sul document.documentElement
   * per attivare le CSS variables corrispondenti
   * 
   * @param {boolean} isDark - Se true, applica il tema scuro
   */
  const applyTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  /**
   * Funzione per cambiare tema
   * 
   * Inverte lo stato corrente del tema, salva la preferenza
   * nel localStorage e applica immediatamente il nuovo tema
   */
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    // applyTheme verrà chiamato automaticamente dall'useEffect
  };

  /**
   * Tema Material-UI semplificato
   * 
   * Manteniamo un tema Material-UI di base per i componenti
   * che ne hanno ancora bisogno, ma le CSS variables hanno la precedenza
   */
  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  // Oggetto value condiviso tramite Context
  const value = {
    isDarkMode,     // Stato corrente del tema
    toggleTheme,    // Funzione per cambiare tema
    applyTheme      // Funzione per applicare tema (utile per testing)
  };

  return (
    <ThemeContext.Provider value={value}>
      {/* Manteniamo ThemeProvider per compatibilità con Material-UI */}
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline normalizza gli stili CSS di base */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
