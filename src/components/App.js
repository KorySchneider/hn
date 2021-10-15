import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateIdCache,
  updateVisibleStories,
  updateCurrentPage,
} from '../redux/actions';

import moment from 'moment';

import { localStorageViewedKey } from '../redux/store';
import { pageSize } from '../redux/store';

import fetchItem from '../util/fetchItem';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import Menu from './Menu';
import Story from './Story';
import Comments from './Comments';
import Spinner from './Spinner';

import { StyledEngineProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

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
  useBottomScrollListener(
    () => {
      console.log('FETCH', page);
      if (visibleStories.length === page * pageSize) {
        updateCurrentPage(page + 1);
      }
    },
    {
      offset: window.innerHeight / 2,
      triggerOnNoScroll: true,
      debounce: 500,
    }
  );

  useEffect(() => {
    // Init storage
    if (Storage && localStorage.getItem(localStorageViewedKey) === null) {
      localStorage.setItem(localStorageViewedKey, JSON.stringify([]));
    }

    // Remove old items
    const data = localStorage.getItem(localStorageViewedKey);
    if (data) {
      let viewed = JSON.parse(data);
      viewed = viewed.filter(item =>
        moment.unix(item.time).isAfter(moment().subtract(5, 'days'))
      );
      localStorage.setItem(localStorageViewedKey, JSON.stringify(viewed));
    }
  }, []);

  useEffect(() => {
    async function fetchPage() {
      if (
        idCache.length > 0 &&
        visibleStories.length < page * pageSize &&
        visibleStories.length < idCache.length
      ) {
        let stories = [];
        const ids = idCache.slice(page * pageSize - pageSize, page * pageSize);
        for (let i = 0; i < ids.length; i++) {
          const story = await fetchItem(ids[i]);
          stories.push(story);
        }

        // filter duplicates
        let storyIds = [];
        stories = stories.filter(story => {
          if (storyIds.includes(story.id)) {
            return false;
          } else {
            storyIds.push(story.id);
            return true;
          }
        });

        updateVisibleStories(visibleStories.concat(stories));
      }
    }
    fetchPage();
  }, [page, idCache, visibleStories, updateVisibleStories]);

  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="md">
        <Menu />

        {visibleStories.map((item, i) => (
          <Story data={item} key={item.title} timeout={i * 30} />
        ))}

        {visibleStories.length < idCache.length && <Spinner />}

        <Comments />
      </Container>
    </StyledEngineProvider>
  );
}

export default connect(mapState, actionCreators)(App);
