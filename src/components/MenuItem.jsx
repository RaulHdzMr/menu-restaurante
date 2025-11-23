import React from 'react';
import { Link } from 'react-router-dom'; 

const MenuItem = ({ item }) => {
  return (
    
    <Link to={`/meals/${item.id}`} className="menu-item-link" style={{ textDecoration: 'none', color: 'inherit' }}>
      
      <div className="menu-item">
        
        <img src={item.thumb} alt={item.name} />
        
        <div style={{ padding: '10px' }}>
         
          <h3>{item.name}</h3>
          
        
          <p>Categoría: **{item.category}**</p>
          
      
          <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Precio: {item.price}€</p>
        </div>
      </div>
      
    </Link> 
  );
};

export default MenuItem;