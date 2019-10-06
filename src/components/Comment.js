import React, { useState } from 'react';

import moment from 'moment';
import h2p from 'html2plaintext';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const style = {
  margin: '1em',
  padding: '5px',
};

const subtextStyle = {
  marginLeft: '20px',
  padding: '5px',
};

function Comment({ data, depth }) {

  const [childComments, setChildComments] = useState([]);

  const loadChildComments = () => {
  };

  return (
    <span>
      <Slide
        direction='up'
        in={data.id >= 0}
        mountOnEnter
        unmountOnExit
      >
        <Card style={style} raised>
          <CardContent>
            {data.id}
            {data.text && data.text.split('<p>').map((p, i) => (
              <Typography gutterBottom key={p+i}>
                {h2p(p)}
              </Typography>
            ))}
          </CardContent>

          <CardActions>
            <Container align='right'>
              <Typography variant='overline' style={subtextStyle}>
                &mdash; {data.by}
              </Typography>
              <Typography variant='overline' style={subtextStyle}>
                {moment.unix(data.time).fromNow()}
              </Typography>
              <Button
                size='small'
                style={{ fontWeight: 400, ...subtextStyle }}
                onClick={loadChildComments}
                disabled={!data.kids || (data.kids && data.kids.length === 0)}
              >
                {(data.kids && data.kids.length + ' replies') || '0 replies'}
              </Button>
            </Container>
          </CardActions>
        </Card>
      </Slide>

      {childComments.map((item, i) => (
        <Comment
          data={item}
          key={item.by + item.id}
          timeout={i * 50}
          depth={depth + 1}
        />
      ))}
    </span>
  )
}

export default Comment;
