import { List as MaterialUIList } from '@mui/material';


function List(props) {
  const {children} = props;
  return (
    <MaterialUIList 
    sx={{
      width: 900
    }}
    {...props}>
      {children}
    </MaterialUIList>
  );
}

export default List;