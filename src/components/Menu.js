import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  updateSection,
  updateIdCache,
  updateCurrentPage,
  updateVisibleStories,
} from '../redux/actions';

import { url } from '../redux/store';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const mapState = state => ({
  section: state.section,
  idCache: state.idCache,
});

const actionCreators = {
  updateSection,
  updateIdCache,
  updateCurrentPage,
  updateVisibleStories,
};

const style = {
  margin: '2em auto',
  padding: '0.5em',
};

function Menu({
  section,
  updateSection,
  idCache,
  updateIdCache,
  updateCurrentPage,
  updateVisibleStories,
}) {

  function handleMenuClick(event) {
    event.stopPropagation();
    let clickedSection = event.currentTarget.id;
    if (clickedSection !== section) {
      updateVisibleStories([]);
      updateIdCache([]);
      updateSection(clickedSection);
      updateCurrentPage(1);
    }
  }

  useEffect(() => {
    async function fetchIds() {
      const response = await fetch(url + `/${section}stories.json`);
      const results = await response.json();
      updateIdCache(results);
    }
    fetchIds();
  }, [section, updateIdCache])

  return (
    <Paper style={style} elevation={2} align='center'>
      <Button
        disabled={section === 'top'}
        id='top'
        onClick={e => handleMenuClick(e)}
      >
        Top
      </Button>

      <Button
        disabled={section === 'new'}
        id='new'
        onClick={e => handleMenuClick(e)}
      >
        New
      </Button>

      <Button
        disabled={section === 'best'}
        id='best'
        onClick={e => handleMenuClick(e)}
      >
        Best
      </Button>

      <Button
        disabled={section === 'ask'}
        id='ask'
        onClick={e => handleMenuClick(e)}
      >
        Ask
      </Button>

      <Button
        disabled={section === 'show'}
        id='show'
        onClick={e => handleMenuClick(e)}
      >
        Show
      </Button>

      <Button
        disabled={section === 'job'}
        id='job'
        onClick={e => handleMenuClick(e)}
      >
        Jobs
      </Button>
    </Paper>
  )
}

export default connect(mapState, actionCreators)(Menu);
