import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Box } from '@mui/material';

export const Loader = () => {
  return (
    <Container>
      {' '}
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Container>
  );
};
