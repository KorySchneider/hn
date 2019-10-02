import React, { useState } from 'react';

import moment from 'moment';
import h2p from 'html2plaintext';

import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const subtextStyle = {
  marginLeft: '20px',
  padding: '5px',
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
          <Typography variant='caption' align='right' gutterBottom>
            {data.url && data.url.split('/')[2].replace(/^www\./, '')}
          </Typography>
          <Typography>
            {expanded && h2p(data.text)}
            {!expanded && data.text &&
              h2p(data.text.substring(0, 70) + '...')
            }
          </Typography>

          <Container align='right'>
            <Typography variant='overline' style={subtextStyle}>
              {data.score + ' points'}
            </Typography>
            <Typography variant='overline' style={subtextStyle}>
              {moment.unix(data.time).fromNow()}
            </Typography>
            <Button
              onClick={e => openComments(e)}
              style={{ fontWeight: 400, ...subtextStyle }}
              size='small'
            >
              {(data.kids && data.kids.length + ' replies') || '0 replies'}
            </Button>
          </Container>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default Story;
