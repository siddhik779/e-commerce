import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#1976d2', color: 'white', mt: 5 }}>
            <Typography variant="body2">© 2024 E-Commerce. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
