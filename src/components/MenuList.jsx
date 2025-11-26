import React from 'react';
import { Box } from '@mui/material';
import MenuItem from './MenuItem';

const MenuList = ({ items }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(auto-fill, minmax(280px, 1fr))',
          sm: 'repeat(auto-fill, minmax(280px, 1fr))',
          md: 'repeat(auto-fill, minmax(280px, 1fr))',
          lg: 'repeat(auto-fill, minmax(280px, 1fr))',
        },
        gap: 3,
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {items.map(item => (
        <Box key={item.id} sx={{ display: 'flex', minHeight: '100%' }}>
          <MenuItem item={item} />
        </Box>
      ))}
    </Box>
  );
};

export default MenuList;
