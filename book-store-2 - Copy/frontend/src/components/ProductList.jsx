import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Container } from '@mui/material';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$15', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$20', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
