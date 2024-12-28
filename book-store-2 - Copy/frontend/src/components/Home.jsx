import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Home = () => {
    return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h3" gutterBottom>Welcome to E-Commerce</Typography>
            <Typography variant="h6">Discover amazing products at the best prices!</Typography>
            <Box component="img" src="https://via.placeholder.com/600x300" alt="Banner" sx={{ width: '100%', mt: 3 }} />
        </Container>
    );
};

export default Home;
