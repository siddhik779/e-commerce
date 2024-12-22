import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
