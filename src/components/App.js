import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateIdCache,
  updateVisibleStories,
  updateVisibleValid,
  updateCurrentPage,
} from '../redux/actions';

import { url, pageSize } from '../redux/store';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import Menu from './Menu';
import Story from './Story';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapState = state => ({
  visibleStories: state.visibleStories,
  idCache: state.idCache,
  page: state.currentPage,
});

const actionCreators = {
  updateIdCache,
  updateVisibleStories,
  updateVisibleValid,
  updateCurrentPage,
}

function App({
  visibleStories,
  updateVisibleStories,
  updateVisibleValid,
  idCache,
  updateIdCache,
  page,
  updateCurrentPage,
}) {

  useBottomScrollListener(() => {
    if (visibleStories.length === page * pageSize) {
      updateCurrentPage(++page);
    }
  }, 500, 200)

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchPage() {
      if (idCache.length > 0) {
        let stories = [];
        const ids = idCache.slice(
          (page * pageSize) - pageSize,
          page * pageSize
        );
        for (let i = 0; i < ids.length; i++) {
          const story = await fetchItem(ids[i]);
          stories.push(story);
        }
        updateVisibleStories(visibleStories.concat(stories));
        updateVisibleValid(true);
      }
    }
    fetchPage();
  }, [
    page,
    idCache,
    updateVisibleStories,
    updateVisibleValid,
  ])

  return (
    <Container maxWidth='md'>
      {/* Menu */}
      <Menu />

      {/* Stories */}
      {visibleStories.map((item, i) => (
        <Story data={item} key={item.title} timeout={i * 50} />
      ))}

      <Container align='center'>
        <CircularProgress style={{ margin: '2em' }} />
      </Container>
    </Container>
  );
}

export default connect(mapState, actionCreators)(App);
