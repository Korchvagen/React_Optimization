import { ListItemText as MaterialUIListItemText } from "@mui/material";

function ListItemText(props) {
  const { children } = props;
  return (
    <MaterialUIListItemText {...props}>
      {children}
    </MaterialUIListItemText>
  );
}

export default ListItemText;