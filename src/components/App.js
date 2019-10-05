import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateIdCache,
  updateVisibleStories,
  updateCurrentPage,
} from '../redux/actions';

import moment from 'moment';

import { localStorageViewedKey } from '../redux/store';

import { url, pageSize } from '../redux/store';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import Menu from './Menu';
import Story from './Story';
import Comments from './Comments';

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
  updateCurrentPage,
};

function App({
  visibleStories,
  updateVisibleStories,
  idCache,
  updateIdCache,
  page,
  updateCurrentPage,
}) {

  useBottomScrollListener(() => {
    if (visibleStories.length === page * pageSize) {
      updateCurrentPage(page => page + 1);
    }
  }, 500, 200)

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    // Init storage
    if (Storage && localStorage.getItem(localStorageViewedKey) === null) {
      localStorage.setItem(localStorageViewedKey, JSON.stringify([]));
    }

    // Remove old items
    const data = localStorage.getItem(localStorageViewedKey);
    if (data) {
      let viewed = JSON.parse(data);
      viewed = viewed.filter(item => (
        moment.unix(item.time).isAfter(moment().subtract(5, 'days'))
      ));
      localStorage.setItem(localStorageViewedKey, JSON.stringify(viewed));
    }
  }, []);

  useEffect(() => {
    async function fetchPage() {
      if (idCache.length > 0 && visibleStories.length < page * pageSize) {
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
      }
    }
    fetchPage();
  }, [
    page,
    idCache,
    visibleStories,
    updateVisibleStories,
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

      <Comments />
    </Container>
  );
}

export default connect(mapState, actionCreators)(App);
