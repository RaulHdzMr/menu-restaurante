import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert,
  Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import MenuList from './MenuList';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        
        if (!response.ok) {
          throw new Error('Error al cargar los platos de esta categoría.');
        }
        
        const data = await response.json();
        
        // Normalizar los datos para que coincidan con el formato de MenuItem
        const normalizedMeals = (data.meals || []).map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal.charAt(0).toUpperCase() + meal.strMeal.slice(1),
          category: categoryName,
          thumb: meal.strMealThumb,
          price: (Math.random() * 20 + 5).toFixed(2), // Precio aleatorio
        }));
        
        setMeals(normalizedMeals);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMealsByCategory();
  }, [categoryName]);

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

  return (
    <Container maxWidth="lg">
      <Button
        component={Link}
        to="/categories"
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
        Volver a Categorías
      </Button>
      
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        sx={{ 
          mb: 2,
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff9800 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}
      >
        🍽️ {categoryName}
      </Typography>
      
      <Typography 
        variant="body1" 
        align="center" 
        sx={{ mb: 4, color: 'text.secondary' }}
      >
        {meals.length} plato{meals.length !== 1 ? 's' : ''} disponible{meals.length !== 1 ? 's' : ''}
      </Typography>
      
      {meals.length > 0 ? (
        <MenuList items={meals} />
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No hay platos disponibles en esta categoría.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CategoryPage;
