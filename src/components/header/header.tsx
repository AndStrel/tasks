import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './header.module.scss';
const Header: React.FC = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" component="div">
          План стажировки
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
