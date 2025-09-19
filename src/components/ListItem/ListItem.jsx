import { ListItem as MaterialListItem, Stack, ListItemAvatar, ListItemText, Avatar, Typography } from '@mui/material';

function ListItem({product, index}) {
  return (
    <MaterialListItem
      key={`${index}-${product.id}-${product.title}`}
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
          alt={`Image of ${product.title}`}
          src={product.images[0]} />
      </ListItemAvatar>
      <Stack>
        <ListItemText primary={product.title} />
        <ListItemText secondary={product.description} />
        <ListItemText>{'$' + product.price}</ListItemText>
        <Typography color='textPrimary' variant='subtitle1'>{product.category}</Typography>
      </Stack>
    </MaterialListItem>
  );
}

export default ListItem;