import React, { useState } from 'react';

import moment from 'moment';
import h2p from 'html2plaintext';

import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const subtextStyle = {
  marginRight: '20px',
};

function Story({ data, timeout }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (data.url) window.open(data.url);
    if (data.text) setExpanded(expanded => !expanded);
  }

  const openComments = (e) => {
    e.stopPropagation();
    window.open(`https://news.ycombinator.com/item?id=${data.id}`);
  }

  return (
    <Slide
      direction='right'
      in={data.title !== ''}
      mountOnEnter
      unmountOnExit
      key={data.id}
      style={{ transitionDelay: `${timeout}ms` }}
    >
      <Card
        onClick={e => handleClick(e)}
        style={{
          margin: '2em auto',
          cursor: 'pointer',
        }}
      >
        <CardContent>
          <Typography variant='h6'>
            {h2p(data.title)}
          </Typography>
          <Typography>
            {expanded && h2p(data.text)}
            {!expanded && data.text &&
              h2p(data.text.substring(0, 70) + '...')
            }
          </Typography>
          <Typography variant='overline' style={subtextStyle}>
            {data.score + ' points'}
          </Typography>
          <Typography variant='overline' style={subtextStyle}>
            {moment.unix(data.time).fromNow()}
          </Typography>
          <Typography onClick={e => openComments(e)} variant='overline' style={subtextStyle}>
            {(data.kids && data.kids.length + ' replies') || '0 replies'}
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default Story;
