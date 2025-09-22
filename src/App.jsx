import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import Filters from './components/Filters/Filters';
import { Container } from '@mui/material';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/products?limit=100');

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(Array(10).fill(null).flatMap(() => [...data.products]));

      setFilters([...new Set(data.products.map(item => item.category))]);
    })();
  }, []);

  const handleToggle = useCallback((value) => {
    setChecked((prev) => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      }

      return [...prev, value];
    });
  }, []);

  const filteredProducts = useMemo(() => {
    if (checked.length === 0) {
      return products;
    }

    return products.filter(item => checked.includes(item.category));
  }, [products, checked]);

  return (
    <Container>
      <Filters filters={filters} checked={checked} handleToggle={handleToggle} />
      <ProductsList products={filteredProducts} />
    </Container>
  )
}

export default App
