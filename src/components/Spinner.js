import React from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
  return (
    <Container align='center'>
      <CircularProgress style={{ margin: '2em' }} />
    </Container>
  )
}

export default Spinner;
