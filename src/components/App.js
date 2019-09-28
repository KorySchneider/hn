import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateIdCache,
  updateVisibleStories,
  updateNextPageBuffer,
  updatePageIndex,
} from '../redux/actions';

import Menu from './Menu';
import Story from './Story';

import Container from '@material-ui/core/Container';

const url = 'https://hacker-news.firebaseio.com/v0';
const pageSize = 20;

const mapState = state => ({
  section: state.section,
  visibleStories: state.visibleStories,
  idCache: state.idCache,
  nextPageBuffer: state.nextPageBuffer,
  pageIndex: state.pageIndex,
});

const actionCreators = {
  updateIdCache,
  updateVisibleStories,
  updateNextPageBuffer,
  updatePageIndex,
}

function App({
  visibleStories,
  updateVisibleStories,
  idCache,
  updateIdCache,
  nextPageBuffer,
  updateNextPageBuffer,
  section,
  pageIndex,
}) {

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchStories() {
      const response = await fetch(url + `/${section}stories.json`);
      const results = await response.json();

      updateIdCache(results);

      let items = [];
      for (let i = pageIndex; i < pageSize; i++) {
        const item = await fetchItem(results[i]);
        items.push(item);
      }
      updateVisibleStories(items);
    }
    fetchStories();
  }, [section, updateIdCache, updateVisibleStories, pageIndex])

  return (
    <Container maxWidth='md'>
      {/* Menu */}
      <Menu />

      {/* Stories */}
      {visibleStories.map((item, i) => (
        <Story data={item} key={item.title} timeout={i * 50} />
      ))}
    </Container>
  );
}

export default connect(mapState, actionCreators)(App);
