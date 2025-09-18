import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';
import ListItemText from './components/ListItemText/ListItemText';
import { Stack, ListItemAvatar, Avatar, Typography } from '@mui/material';
import './App.css'
import { useEffect, useState, Profiler } from 'react';

function App() {
  const [products, setProducts] = useState([]);

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
    }

    fetchData();
  }, []);

  return (
    <>
      <Profiler id="List" onRender={(id, phase, actualDuration, baseDuration) => console.log(id, phase, actualDuration, baseDuration)}>
        <List>
          {products.map((item, index) =>
            <ListItem
              key={`${index}-${item.id}-${item.title}`}
              divider={true}>
              <ListItemAvatar
                sx={{
                  width: 200,
                  height: 200,
                  paddingRight: 2.5
                }}>
                <Avatar
                  sx={{
                    width: "100%",
                    height: "100%"
                  }}
                  alt={`Image of ${item.title}`}
                  src={item.images[0]} />
              </ListItemAvatar>
              <Stack>
                <ListItemText primary={item.title} />
                <ListItemText secondary={item.description} />
                <ListItemText>{'$' + item.price}</ListItemText>
                <Typography color='textPrimary' variant='subtitle1'>{item.category}</Typography>
              </Stack>
            </ListItem>
          )}
        </List>
      </Profiler>
    </>
  )
}

export default App
