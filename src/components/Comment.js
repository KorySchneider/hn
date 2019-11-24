import React, { useState } from 'react';

import fetchItem from '../util/fetchItem';

import moment from 'moment';
import h2p from 'html2plaintext';

import CardSubtextItem, { cardSubtextStyle } from './CardSubtextItem';
import Spinner from './Spinner';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

function Comment({ data, depth }) {

  const [childComments, setChildComments] = useState([]);
  const [fetchingKids, setFetchingKids] = useState(false);

  const fetchKids = async () => {
    setFetchingKids(true);
    let kids = [];
    for (let i = 0; i < data.kids.length; i++) {
      const kid = await fetchItem(data.kids[i]);
      kids.push(kid);
    }
    kids = kids.filter(item => {
      if (item === null) return false;
      if (item.dead || item.deleted) return false;
      return true;
    })
    setChildComments(kids);
    setFetchingKids(false);
  };

  return (
    <span>
      <Slide
        direction='up'
        in={data.id >= 0}
        mountOnEnter
        unmountOnExit
      >
        <Card
          raised
          style={{
            margin: '1em',
            padding: '5px',
            marginLeft: `calc(1em + ${depth}em)`
          }}
        >
          <CardContent>
            {data.text && data.text.split('<p>').map((p, i) => (
              <Typography gutterBottom key={p+i}>
                {h2p(p)}
              </Typography>
            ))}
          </CardContent>

          <CardActions>
            <Container align='right'>
              <CardSubtextItem
                text={<span>&mdash; {data.by}</span>}
              />
              <CardSubtextItem
                text={moment.unix(data.time).fromNow()}
              />
              <Button
                size='small'
                style={cardSubtextStyle}
                onClick={fetchKids}
                disabled={!data.kids || (data.kids && data.kids.length === 0)}
              >
                {(data.kids && data.kids.length + ' replies') || '0 replies'}
              </Button>
            </Container>
          </CardActions>
        </Card>
      </Slide>

      {fetchingKids &&
        <Spinner />
      }
      {childComments.map((item, i) => (
        <Comment
          data={item}
          key={item.by + item.id}
          timeout={i * 30}
          depth={depth + 1}
        />
      ))}
    </span>
  )
}

export default Comment;
