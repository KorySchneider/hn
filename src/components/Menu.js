import React from 'react';
import { connect } from 'react-redux';

import { updateSection } from '../redux/actions';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const mapState = state => ({
  section: state.section,
});

const actionCreators = {
  updateSection,
};

const style = {
  margin: '2em auto',
  padding: '0.5em',
};

function Menu({ updateSection }) {

  function handleMenuClick(event) {
    updateSection(event.currentTarget.id);
  }

  return (
    <Paper style={style} elevation={2} align='center'>
      <Button id='top' onClick={e => handleMenuClick(e)}>Top</Button>
      <Button id='new' onClick={e => handleMenuClick(e)}>New</Button>
      <Button id='best' onClick={e => handleMenuClick(e)}>Best</Button>
      <Button id='ask' onClick={e => handleMenuClick(e)}>Ask</Button>
      <Button id='show' onClick={e => handleMenuClick(e)}>Show</Button>
      <Button id='job' onClick={e => handleMenuClick(e)}>Jobs</Button>
    </Paper>
  )
}

export default connect(mapState, actionCreators)(Menu);
