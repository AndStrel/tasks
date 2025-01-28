import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: '5px' }}>
      <Toolbar sx={{ justifyContent: 'center'  }}>
        <Typography variant="h6" component="div">
          План стажировки
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
