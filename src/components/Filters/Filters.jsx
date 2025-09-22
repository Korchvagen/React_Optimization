import { useState } from 'react';
import { Stack, Collapse, Button, List } from "@mui/material";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import FilterItem from '../FilterItem/FilterItem';

function Filters({ filters, checked, handleToggle }) {
  console.log('рендер фильтра');
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

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
              <FilterItem
                key={`${index}-${item}`}
                item={item}
                isChecked={checked.includes(item)}
                handleToggle={handleToggle}
              />
            )
          }
        </List>
      </Collapse>
    </Stack>
  );
}

export default Filters;