import { memo } from "react";
import { ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox } from "@mui/material";

const FilterItem = memo(function FilterItem({ item, isChecked, handleToggle }) {
  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={() => handleToggle(item)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
          />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
});

export default FilterItem;