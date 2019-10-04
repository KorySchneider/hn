import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { localStorageViewedKey } from '../redux/store';

import {
  updateCommentsOpen,
  updateComments,
  updateCommentsParent,
} from '../redux/actions';

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

const mapState = state => ({
  commentsOpen: state.commentsOpen,
});

const actionCreators = {
  updateCommentsOpen,
  updateComments,
  updateCommentsParent,
};

function Story({
  data,
  timeout,
  commentsOpen,
  updateCommentsOpen,
  updateComments,
  updateCommentsParent,
}) {
  const [expanded, setExpanded] = useState(false);
  const [viewed, setViewed] = useState(false);

  // Check if previously viewed
  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem(localStorageViewedKey));
    for (let i = 0; i < viewed.length; i++) {
      if (viewed[i].id === data.id) setViewed(true);
    }
  }, [data.id]);

  const addToViewed = () => {
    setViewed(true);
    let viewed = JSON.parse(localStorage.getItem(localStorageViewedKey));
    let alreadyViewed = false;
    for (let i = 0; i < viewed.length; i++) {
      if (viewed[i].id === data.id) alreadyViewed = true;
    }
    if (!alreadyViewed) {
      viewed.push({
        id: data.id,
        time: moment().unix(),
      });
      localStorage.setItem(localStorageViewedKey, JSON.stringify(viewed));
    }
  }

  const handleClick = (e) => {
    e.stopPropagation();

    addToViewed();

    if (data.url) window.open(data.url);
    if (data.text) setExpanded(expanded => !expanded);
  }

  const openComments = (e) => {
    e.stopPropagation();
    //window.open(`https://news.ycombinator.com/item?id=${data.id}`);
    updateCommentsOpen(true);
    updateCommentsParent(data);
    updateComments(data.kids);
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
          <Typography variant='caption' gutterBottom>
            {data.url && data.url.split('/')[2].replace(/^www\./, '')}
          </Typography>
          <Typography gutterBottom>
            {expanded && h2p(data.text)}
            {!expanded && data.text &&
              h2p(data.text.substring(0, 70) + '...')
            }
          </Typography>

          <Container align='right'>
            <Typography variant='overline' style={subtextStyle}>
              {moment.unix(data.time).fromNow()}
            </Typography>
            {viewed &&
              <Typography variant='overline' style={subtextStyle}>
                {data.score + ' points'}
              </Typography>
            }
            {viewed &&
              <Button
                onClick={e => openComments(e)}
                style={{ fontWeight: 400, ...subtextStyle }}
                size='small'
              >
                {(data.kids && data.kids.length + ' replies') || '0 replies'}
              </Button>
            }
          </Container>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default connect(mapState, actionCreators)(Story);
