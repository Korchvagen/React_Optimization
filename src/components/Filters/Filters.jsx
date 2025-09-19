import { useState } from 'react';
import { Stack, Collapse, Button, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox } from "@mui/material";
import { ExpandMore, ExpandLess } from '@mui/icons-material';

function Filters({ filters, checked, handleToggle }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <Button
        variant='outlined'
        onClick={handleClick}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
      >
        Filters
      </Button>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component='div' disablePadding>
          {
            filters.map((item, index) =>
              <ListItem
                key={`${index}-${item}`}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.includes(item)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )
          }
        </List>
      </Collapse>
    </Stack>
  );
}

export default Filters;