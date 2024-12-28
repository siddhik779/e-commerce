import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    E-Commerce
                </Typography>
                <Box>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/products" color="inherit">Products</Button>
                    <Button component={Link} to="/cart" color="inherit">Cart</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
