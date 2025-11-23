import { useParams, Link } from 'react-dom';

const MealDetailsPage = () => {
 
  const { mealId } = useParams();


  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Detalle del Plato ID: **{mealId}**</h3>
      <p>
        Esta es la **subruta anidada dinámica** que cumple con el requisito
       
      </p>
      <p>
        Aquí se mostrarán todos los ingredientes, instrucciones y el precio final 
        (por ejemplo, haciendo un `fetch` a otro endpoint de TheMealDB con el `mealId`).
      </p>
      <Link to="/meals">Volver al Menú</Link>
    </div>
  );
};

export default MealDetailsPage;