import { Virtuoso } from 'react-virtuoso';
import ListItem from '../ListItem/ListItem';

function ProductsList({ products }) {
  console.log("Рендер списка...");

  return (
    <Virtuoso
      style={{ width: 900, height: 800 }}
      data={products}
      itemContent={(index, item) => (
        <ListItem key={`${index}-${item.id}-${item.title}`} product={item} index={index} />
      )}
    />
  );
}

export default ProductsList;