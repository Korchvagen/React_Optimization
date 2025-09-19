import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import Filters from './components/Filters/Filters';
import { Container } from '@mui/material';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=100');

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(() => [
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products,
        ...data.products
      ]);

      setFilters(() => {
        const categories = [];

        data.products.forEach(item => {
          if (!categories.includes(item.category)) {
            categories.push(item.category);
          }
        });

        return categories;
      });
    }

    fetchData();

  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container>
      <Filters filters={filters} checked={checked} handleToggle={handleToggle}/>
      <ProductsList products={products} />
    </Container>
  )
}

export default App
