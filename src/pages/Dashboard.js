/**
 * Componente Dashboard - Pagina principale del registro elettronico
 * 
 * Mostra una panoramica delle informazioni più importanti per lo studente:
 * - Statistiche principali (voti, compiti, presenza)
 * - Ultimi voti ricevuti
 * - Compiti in scadenza
 * 
 * Concetti React utilizzati:
 * - Functional Components: https://react.dev/learn/your-first-component
 * - Props destructuring e composizione
 * - Map per rendering di liste: https://react.dev/learn/rendering-lists
 * - Conditional rendering: https://react.dev/learn/conditional-rendering
 */

import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Grade as GradeIcon,
  Schedule as ScheduleIcon,
  Announcement as AnnouncementIcon
} from '@mui/icons-material';

/**
 * Componente funzionale Dashboard
 * 
 * Utilizza dati mock per simulare le informazioni del registro
 * In un'app reale, questi dati arriverebbero da API calls
 */
const Dashboard = () => {
  // Dati simulati per il registro elettronico
  // In un'app reale, questi verrebbero da uno state management o API
  const mockData = {
    voti: [
      { materia: 'Matematica', voto: 8, data: '2024-01-15' },
      { materia: 'Italiano', voto: 7, data: '2024-01-14' },
      { materia: 'Storia', voto: 9, data: '2024-01-12' }
    ],
    compiti: [
      { materia: 'Inglese', descrizione: 'Esercizi pagina 45-47', scadenza: '2024-01-20' },
      { materia: 'Scienze', descrizione: 'Relazione esperimento', scadenza: '2024-01-22' }
    ]
  };

  /**
   * Componente StatCard - Card riutilizzabile per le statistiche
   * 
   * Esempio di componente riutilizzabile che accetta props
   * per mostrare diversi tipi di statistiche
   * 
   * @param {string} title - Titolo della statistica
   * @param {string|number} value - Valore da mostrare
   * @param {React.ReactNode} icon - Icona da mostrare
   * @param {string} color - Colore del tema Material-UI
   */
  const StatCard = ({ title, value, icon, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
          </Box>
          <Box sx={{ color: `${color}.main` }}>
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  /**
   * Render della Dashboard
   * 
   * Utilizza Material-UI Grid per layout responsive e 
   * map() per renderizzare liste di elementi dinamicamente
   */
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Studente
      </Typography>
      
      {/* Grid delle statistiche principali */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Media Voti"
            value="8.0"
            icon={<GradeIcon sx={{ fontSize: 40 }} />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Compiti"
            value={mockData.compiti.length}  // Utilizzo di .length per contare
            icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Ore Presenza"
            value="156/160"
            icon={<ScheduleIcon sx={{ fontSize: 40 }} />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Comunicazioni"
            value="3"
            icon={<AnnouncementIcon sx={{ fontSize: 40 }} />}
            color="error"
          />
        </Grid>
      </Grid>

      {/* Sezione con voti e compiti */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ultimi Voti
              </Typography>
              {/* 
                Esempio di map() per renderizzare una lista
                https://react.dev/learn/rendering-lists 
              */}
              {mockData.voti.map((voto, index) => (
                <Box key={index} display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="body1">{voto.materia}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    {/* Conditional rendering basato sul voto */}
                    <Chip
                      label={voto.voto}
                      color={voto.voto >= 8 ? 'success' : voto.voto >= 6 ? 'primary' : 'error'}
                      size="small"
                    />
                    <Typography variant="body2" color="textSecondary">
                      {voto.data}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small">Vedi tutti i voti</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compiti in Scadenza
              </Typography>
              {/* Altro esempio di map() per rendering di liste */}
              {mockData.compiti.map((compito, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">{compito.materia}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {compito.descrizione}
                  </Typography>
                  <Typography variant="caption" color="warning.main">
                    Scadenza: {compito.scadenza}
                  </Typography>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small">Vedi tutti i compiti</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
