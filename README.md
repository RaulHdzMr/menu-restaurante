# Menú de Restaurante con React

Esta es una aplicación de una sola página (SPA) creada con React y Vite que muestra el menú de un restaurante.

## Captura de pantalla

![Captura de pantalla de la aplicación](captura_menu.png)

## Descripción de la tarea

El objetivo de este proyecto es construir una aplicación de menú de restaurante para practicar los fundamentos de React, incluyendo:

*   **Componentes funcionales:** La aplicación está estructurada en varios componentes (`App`, `MenuList`, `MenuItem`).
*   **Manejo de estado:** Se utiliza `useState` para gestionar el estado de los platos, la carga y los errores.
*   **Efectos secundarios:** Se utiliza `useEffect` para realizar una llamada a una API externa (`TheMealDB`) y cargar los datos de los platos cuando el componente `App` se monta.
*   **Renderizado condicional:** La interfaz de usuario muestra un mensaje de "Cargando..." mientras se obtienen los datos y un mensaje de error si la llamada a la API falla.
*   **Props:** Los datos de los platos se pasan de componentes padres a hijos a través de props.
*   **Estilización básica:** Se ha aplicado CSS para crear un diseño de cuadrícula simple y responsivo para los elementos del menú.
*   **Extras:** Se han implementado un buscador por nombre y un filtro por categoría para mejorar la usabilidad de la aplicación.

## Dependencias instaladas

Este proyecto se creó utilizando Vite con la plantilla de React. Las dependencias principales son:

*   `react`
*   `react-dom`

No se han instalado dependencias adicionales más allá de las que vienen con la plantilla estándar de Vite para React.

Para instalar las dependencias, ejecuta:
```bash
npm install
```

Para iniciar el servidor de desarrollo, ejecuta:
```bash
npm run dev
```
