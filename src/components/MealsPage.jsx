import React, { useState, useEffect } from 'react';
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
        [cite_start]
        const normalizedData = (data.meals || []).map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal,
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
    return <p>Cargando platos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

 
  return (
    <div>
      <h2>🍽️ Menú del Restaurante</h2>
      <div className="filters" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} style={{ padding: '8px' }}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Todas las categorías' : category}
            </option>
          ))}
        </select>
      </div>
      
      <MenuList items={filteredItems} /> 
    </div>
  );
};

export default MealsPage;