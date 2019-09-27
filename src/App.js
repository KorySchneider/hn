import React, { useState, useEffect } from 'react';

import Story from './Story';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const url = 'https://hacker-news.firebaseio.com/v0';
const pageSize = 20;

const menuStyle = {
  margin: '2em auto',
  padding: '0.5em',
};

function App() {
  const [section, setSection] = useState('ask');
  const [topStories, setTopStories] = useState([]);
  const [newStories, setNewStories] = useState([]);
  const [bestStories, setBestStories] = useState([]);
  const [askStories, setAskStories] = useState([]);
  const [showStories, setShowStories] = useState([]);
  const [jobStories, setJobStories] = useState([]);
  const [visibleStories, setVisibleStories] = useState([]);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentsParent, setCommentsParent] = useState(null);

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchStories() {
      const response = await fetch(url + `/${section}stories.json`);
      const results = await response.json();

      let items = [];
      for (let i = 0; i < 25; i++) {
        const item = await fetchItem(results[i]);
        items.push(item);
      }

      setVisibleStories(items);
      return results;
    }
    fetchStories();
  }, [])

  function handleMenuClick(event) {
    setSection(event.currentTarget.id);
  }

  return (
    <Container maxWidth='md'>
      {/* Menu */}
      <Paper style={menuStyle} elevation={2} align='center'>
        <Button id='top' onClick={e => handleMenuClick(e)}>Top</Button>
        <Button id='new' onClick={e => handleMenuClick(e)}>New</Button>
        <Button id='best' onClick={e => handleMenuClick(e)}>Best</Button>
        <Button id='ask' onClick={e => handleMenuClick(e)}>Ask</Button>
        <Button id='show' onClick={e => handleMenuClick(e)}>Show</Button>
        <Button id='job' onClick={e => handleMenuClick(e)}>Jobs</Button>
      </Paper>

      {/* Stories */}
      {visibleStories.map(item => <Story data={item} key={item.title} />)}

      {/* Comments */}
    </Container>
  );
}

export default App;
