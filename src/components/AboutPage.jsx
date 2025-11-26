import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Divider
} from '@mui/material';
import { Restaurant, LocalDining, Favorite } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        sx={{ 
          mb: 4,
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff9800 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}
      >
        Sobre Nosotros
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Restaurant sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Nuestra Historia
            </Typography>
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ lineHeight: 1.8, mb: 3, color: 'text.secondary' }}
          >
            Bienvenido a nuestro restaurante. Nos dedicamos a ofrecer los mejores platos
            con ingredientes frescos y de alta calidad. Nuestra pasión es la cocina y
            queremos compartirla contigo.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LocalDining sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Nuestra Misión
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            sx={{ lineHeight: 1.8, mb: 3, color: 'text.secondary' }}
          >
            Explora nuestro menú y descubre una variedad de sabores que te encantarán.
            Cada plato es preparado con dedicación y amor por la gastronomía.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Favorite sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Nuestro Compromiso
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            sx={{ lineHeight: 1.8, color: 'text.secondary' }}
          >
            Estamos comprometidos con la excelencia en cada plato que servimos.
            Utilizamos solo los ingredientes más frescos y de la más alta calidad
            para garantizar una experiencia culinaria inolvidable. ¡Esperamos verte pronto!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutPage;
