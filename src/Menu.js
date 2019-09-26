import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const style = {
  margin: '2em auto',
  padding: '0.5em',
};

function Menu() {
  return (
    <Paper style={style} elevation={2} align='center'>
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
