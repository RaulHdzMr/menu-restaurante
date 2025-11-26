import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert, 
  Button,
  Card,
  CardMedia,
  Chip,
  Divider
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const MealDetailsPage = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        if (!response.ok) {
          throw new Error('Error al cargar los detalles del plato.');
        }
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        } else {
          throw new Error('Plato no encontrado.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Alert severity="error">Error: {error}</Alert>
      </Container>
    );
  }

  if (!meal) return null;

  return (
    <Container maxWidth="md">
      <Button
        component={Link}
        to="/meals"
        startIcon={<ArrowBack />}
        variant="outlined"
        sx={{ 
          mb: 3,
          borderColor: '#ff6b35',
          color: '#ff6b35',
          '&:hover': {
            borderColor: '#ff8c61',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
          },
        }}
      >
        Volver al Menú
      </Button>

      <Card sx={{ overflow: 'visible' }}>
        <CardMedia
          component="img"
          height="400"
          image={meal.strMealThumb}
          alt={meal.strMeal}
          sx={{ objectFit: 'cover' }}
        />
        
        <Box sx={{ p: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff9800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {meal.strMeal}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <Chip 
              label={`Categoría: ${meal.strCategory}`} 
              sx={{ 
                backgroundColor: 'rgba(255, 107, 53, 0.15)',
                color: '#ff8c61',
                fontWeight: 500,
              }} 
            />
            <Chip 
              label={`Área: ${meal.strArea}`} 
              sx={{ 
                backgroundColor: 'rgba(255, 107, 53, 0.15)',
                color: '#ff8c61',
                fontWeight: 500,
              }} 
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Instrucciones de Preparación
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.8,
              color: 'text.secondary',
              whiteSpace: 'pre-line',
            }}
          >
            {meal.strInstructions}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default MealDetailsPage;