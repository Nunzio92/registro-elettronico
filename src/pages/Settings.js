import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Impostazioni
      </Typography>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Aspetto
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Tema Scuro"
                secondary="Attiva il tema scuro per ridurre l'affaticamento degli occhi"
              />
              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isDarkMode}
                      onChange={toggleTheme}
                      icon={<LightModeIcon />}
                      checkedIcon={<DarkModeIcon />}
                    />
                  }
                  label=""
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>
            Informazioni
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Versione App"
                secondary="1.0.0"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Ultimo Aggiornamento"
                secondary="Gennaio 2024"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Sviluppato con"
                secondary="React + Material-UI"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
