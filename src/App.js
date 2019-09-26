import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const url = 'https://hacker-news.firebaseio.com/v0/';

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
      const response = await fetch(url + 'topstories.json');
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
      <Paper style={{marginTop: '2em'}} elevation={2} align='center'>
        <Button onClick={() => console.log('press')}>Top</Button>
        <Button onClick={() => console.log('press')}>New</Button>
        <Button onClick={() => console.log('press')}>Best</Button>
        <Button onClick={() => console.log('press')}>Ask</Button>
        <Button onClick={() => console.log('press')}>Show</Button>
        <Button onClick={() => console.log('press')}>Job</Button>
      </Paper>

      {visibleItems.map(item => (
        <Slide
          direction='up'
          in={item.title !== ''}
          mountOnEnter
          unmountOnExit
          key={item.title}
        >
          <Card
            onClick={() => {
              if (item.url) window.open(item.url);
            }}
            style={{
              margin: '2em auto',
              cursor: 'pointer',
            }}
          >
            <CardContent>
              <Typography variant='h6'>
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      ))}
    </Container>
  );
}

export default App;
