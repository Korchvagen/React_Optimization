import React from 'react';
import { List } from '@mui/material';
import ListItem from '../ListItem/ListItem';

const ProductsList = React.memo(function ProductsList({products}) {
  return (
    <List
      sx={{
        width: 900
      }}
    >
      {products.map((item, index) =>
        <ListItem key={`${index}-${item.id}-${item.title}`} product={item} index={index}/>
      )}
    </List>
  );
});

export default ProductsList;