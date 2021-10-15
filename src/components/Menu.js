import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  updateSection,
  updateIdCache,
  updateCurrentPage,
  updateVisibleStories,
} from '../redux/actions';

import { url } from '../redux/store';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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

const styles = {
  menu: {
    margin: '2em auto',
    padding: '0.5em',
    position: 'sticky',
    top: '0.5em',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    paddingTop: '0.75em',
    paddingBottom: '0.75em',
  },
};

function Menu({
  section,
  updateSection,
  idCache,
  updateIdCache,
  updateCurrentPage,
  updateVisibleStories,
}) {
  const sections = ['top', 'new', 'best', 'ask', 'show', 'job'];

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
    <Paper style={styles.menu} elevation={4} align='center' id='menu'>
      {sections.map(name => (
        <Button
          disabled={section === name}
          id={name}
          key={name}
          onClick={e => handleMenuClick(e)}
          style={styles.button}
        >
          {name === 'job' ? 'jobs' : name}
        </Button>
      ))}
    </Paper>
  )
}

export default connect(mapState, actionCreators)(Menu);
