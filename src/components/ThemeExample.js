/**
 * Componente ThemeExample - Esempi di utilizzo delle CSS Variables
 * 
 * Questo componente dimostra come utilizzare le CSS Variables per il theming
 * combinando componenti Material-UI con stili personalizzati
 * 
 * Concetti dimostrati:
 * - CSS Variables con var() function
 * - Stili inline che utilizzano CSS custom properties
 * - Integrazione tra Material-UI e CSS personalizzati
 * - Responsive design con CSS variables
 * 
 * CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 */

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid
} from '@mui/material';
import {
  Lightbulb as LightIcon,
  Palette as PaletteIcon,
  Code as CodeIcon
} from '@mui/icons-material';

// Importa gli stili personalizzati
import '../styles/components.css';

/**
 * Componente funzionale ThemeExample
 * 
 * Mostra diversi modi di utilizzare le CSS variables nel theming
 */
const ThemeExample = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Esempi di CSS Variables per Theming
      </Typography>
      
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Questo componente dimostra come utilizzare CSS Custom Properties 
        per creare un sistema di theming moderno e performante.
      </Typography>

      <Grid container spacing={3}>
        {/* Esempio 1: CSS Variables in stili inline */}
        <Grid item xs={12} md={4}>
          <div 
            style={{
              backgroundColor: 'var(--background-paper)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-medium)'
            }}
          >
            <LightIcon 
              style={{ 
                color: 'var(--primary-color)', 
                fontSize: '2rem',
                marginBottom: '1rem'
              }} 
            />
            <h3 style={{ color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>
              Stili Inline
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Questo card utilizza CSS variables direttamente negli stili inline. 
              Ottimo per componenti semplici o prototipazione rapida.
            </p>
          </div>
        </Grid>

        {/* Esempio 2: CSS Classes personalizzate */}
        <Grid item xs={12} md={4}>
          <div className="custom-card">
            <PaletteIcon className="login-icon" />
            <h3 className="custom-card-title">
              CSS Classes
            </h3>
            <div className="custom-card-content">
              Questo card utilizza classi CSS personalizzate definite in 
              components.css che sfruttano le CSS variables.
              
              <div style={{ marginTop: '1rem' }}>
                <span className="custom-chip success">Successo</span>
                {' '}
                <span className="custom-chip warning">Attenzione</span>
                {' '}
                <span className="custom-chip error">Errore</span>
              </div>
            </div>
          </div>
        </Grid>

        {/* Esempio 3: Material-UI con CSS Variables */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              // Utilizzo di CSS variables in Material-UI sx prop
              backgroundColor: 'var(--background-paper)',
              border: '1px solid var(--border-color)',
              '&:hover': {
                boxShadow: 'var(--shadow-heavy)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <CardContent>
              <CodeIcon 
                sx={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2rem',
                  mb: 2
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ color: 'var(--text-primary)', mb: 2 }}
              >
                Material-UI + CSS Variables
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: 'var(--text-secondary)' }}
              >
                Questo card combina Material-UI con CSS variables tramite 
                la prop sx. Ideale per progetti che utilizzano già Material-UI.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Sezione con esempi di input personalizzati */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'var(--text-primary)' }}>
          Esempi di Componenti Personalizzati
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="custom-card">
              <h4 className="custom-card-title">Input Personalizzato</h4>
              <input 
                className="custom-input"
                type="text" 
                placeholder="Questo input utilizza CSS variables..."
              />
              <button className="custom-button">
                Button Personalizzato
              </button>
            </div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <div className="custom-card">
              <h4 className="custom-card-title">Alert Personalizzati</h4>
              
              <div className="custom-alert success">
                ✅ Operazione completata con successo!
              </div>
              
              <div className="custom-alert error">
                ❌ Si è verificato un errore durante l'operazione.
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* Sezione con codice di esempio */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: 'var(--background-secondary)', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'var(--text-primary)' }}>
          💡 Come utilizzare le CSS Variables
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
          {`// In CSS:`}<br />
          {`.my-component {`}<br />
          {`  background-color: var(--background-paper);`}<br />
          {`  color: var(--text-primary);`}<br />
          {`}`}<br /><br />
          
          {`// In stili inline React:`}<br />
          {`<div style={{ color: 'var(--primary-color)' }}>`}<br /><br />
          
          {`// In Material-UI sx prop:`}<br />
          {`<Box sx={{ backgroundColor: 'var(--background-paper)' }}>`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ThemeExample;
