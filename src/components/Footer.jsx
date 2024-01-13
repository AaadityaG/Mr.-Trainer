import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" >
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" >Made by <a href="https://github.com/aaadityaG" style={{textDecoration: 'none', color: 'yellow'}} target="_blank">Aditya</a> </Typography>
  </Box>
);

export default Footer;