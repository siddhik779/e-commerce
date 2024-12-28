import React from 'react';
import { Container, Typography } from '@mui/material';

const Cart = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4">Your Shopping Cart</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                Your cart is currently empty.
            </Typography>
        </Container>
    );
};

export default Cart;
