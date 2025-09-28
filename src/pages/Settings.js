/**
 * 🎯 TASK: Implementa la pagina impostazioni
 * 
 * Dovrai:
 * 1. Integrare con ThemeContext
 * 2. Creare switch per toggle tema
 * 3. Mostrare informazioni app
 */

import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material';
// 🎯 TASK: Importa useTheme
// import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  // 🎯 TASK: Usa ThemeContext
  // const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Impostazioni
      </Typography>
      
      {/* Messaggio informativo */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: '#e8f5e8', borderRadius: 2 }}>
        <Typography variant="body1" color="success.main">
          🎯 <strong>TASK Settings:</strong> Implementa l'integrazione con ThemeContext per il toggle del tema!
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Aspetto
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Tema Scuro"
                secondary="🎯 TASK: Implementa toggle tema con ThemeContext"
              />
              <ListItemSecondaryAction>
                {/* 🎯 TASK: Switch per tema */}
                <FormControlLabel
                  control={
                    <Switch 
                      // checked={isDarkMode}
                      // onChange={toggleTheme}
                      disabled
                      icon={<LightModeIcon />}
                      checkedIcon={<DarkModeIcon />}
                    />
                  }
                  label="🎯 TASK: Collega al ThemeContext"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Informazioni App
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Versione"
                secondary="1.0.0 - Sviluppata da te nel corso React!"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tecnologie"
                secondary="React + Material-UI + CSS Variables + Context API"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Stato Implementazione"
                secondary="🎯 TASK: Completa tutti gli step per vedere ✅ qui!"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Prossimi Step"
                secondary="Segui GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md per completare l'app"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;