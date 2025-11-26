import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
          throw new Error('Error al cargar las categorías.');
        }
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
        🍴 Categorías de Platos
      </Typography>
      
      <Typography 
        variant="body1" 
        align="center" 
        sx={{ mb: 4, color: 'text.secondary' }}
      >
        Explora nuestras diferentes categorías de comida
      </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(280px, 1fr))',
            sm: 'repeat(auto-fill, minmax(280px, 1fr))',
            md: 'repeat(auto-fill, minmax(280px, 1fr))',
            lg: 'repeat(auto-fill, minmax(280px, 1fr))',
          },
          gap: 3,
          justifyContent: 'center',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {categories.map(category => (
          <Card 
            key={category.idCategory}
            sx={{ 
              width: '100%',
              height: '100%',
              minHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(255, 107, 53, 0.3)',
              },
            }}
          >
            <CardActionArea 
              component={Link} 
              to={`/category/${category.strCategory}`}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
            >
              <CardMedia
                component="img"
                height="200"
                image={category.strCategoryThumb}
                alt={category.strCategory}
                sx={{ objectFit: 'cover' }}
              />
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {category.strCategory}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    mb: 2,
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {category.strCategoryDescription}
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: '#ff6b35',
                    gap: 0.5,
                    fontWeight: 500,
                    mt: 'auto',
                  }}
                >
                  Ver Platos
                  <ArrowForward fontSize="small" />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default CategoriesPage;
