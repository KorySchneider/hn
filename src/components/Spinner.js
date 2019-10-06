import React from 'react';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner() {
  return (
    <Container align='center'>
      <CircularProgress style={{ margin: '2em' }} />
    </Container>
  )
}

export default Spinner;
