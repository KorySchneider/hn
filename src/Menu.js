import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function Menu() {
  return (
    <Paper style={{marginTop: '2em'}} elevation={2} align='center'>
      <Button onClick={() => console.log('press')}>Top</Button>
      <Button onClick={() => console.log('press')}>New</Button>
      <Button onClick={() => console.log('press')}>Best</Button>
      <Button onClick={() => console.log('press')}>Ask</Button>
      <Button onClick={() => console.log('press')}>Show</Button>
      <Button onClick={() => console.log('press')}>Job</Button>
    </Paper>
  )
}

export default Menu;
