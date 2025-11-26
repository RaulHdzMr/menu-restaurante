import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Box, 
  CircularProgress,
  Alert,
  InputAdornment
} from '@mui/material';
import { Search } from '@mui/icons-material';
import MenuList from '../components/MenuList';

const MealsPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        if (!response.ok) {
          throw new Error('Error al cargar la API de comidas.');
        }
        const data = await response.json();

        const normalizedData = (data.meals || []).map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal.charAt(0).toUpperCase() + meal.strMeal.slice(1),
          category: meal.strCategory,
          thumb: meal.strMealThumb,
          price: (Math.random() * 20 + 5).toFixed(2),
        }));
        setItems(normalizedData);
        setFilteredItems(normalizedData);
        const uniqueCategories = ['all', ...new Set(normalizedData.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  useEffect(() => {
    let currentItems = [...items];
    if (searchTerm) {
      currentItems = currentItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory && selectedCategory !== 'all') {
      currentItems = currentItems.filter(item => item.category === selectedCategory);
    }
    setFilteredItems(currentItems);
  }, [searchTerm, selectedCategory, items]);

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
          mb: 4,
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff9800 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}
      >
        🍽️ Menú del Restaurante
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
        <TextField
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#ff6b35' }} />
              </InputAdornment>
            ),
          }}
        />
        
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={selectedCategory}
            label="Categoría"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category === 'all' ? 'Todas las categorías' : category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <MenuList items={filteredItems} />
    </Container>
  );
};

export default MealsPage;