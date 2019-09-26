import React, { useState, useEffect } from 'react';

const url = 'https://hacker-news.firebaseio.com/v0/';

function App() {
  const [topStories, setTopStories] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

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
      for (let i = 0; i < 5; i++) {
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
    <div className="App">
      {visibleItems.map(item => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
