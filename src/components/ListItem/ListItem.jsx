import { ListItem as MaterialUIListItem} from '@mui/material';


function ListItem(props) {
  const {children} = props;
  return (
    <MaterialUIListItem {...props}>
      {children}
    </MaterialUIListItem>
  );
}

export default ListItem;