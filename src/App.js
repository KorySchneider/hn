import React, { useState, useEffect } from 'react';

import Menu from './Menu';
import Story from './Story';

import Container from '@material-ui/core/Container';

const url = 'https://hacker-news.firebaseio.com/v0';

function App() {
  const [topStories, setTopStories] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [pageIndex, setPageIndex] = useState(pageSize);

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchTopStories() {
      const response = await fetch(url + '/topstories.json');
      const results = await response.json();

      let items = [];
      for (let i = 0; i < 25; i++) {
        const item = await fetchItem(results[i]);
        items.push(item);
      }

      setVisibleItems(items);
      setTopStories(results);
      return results;
    }
    fetchTopStories();
  }, [])

  return (
    <Container maxWidth='md'>
      <Menu />
      {visibleItems.map(item => <Story data={item} key={item.title} />)}
    </Container>
  );
}

export default App;
