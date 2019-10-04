import React from 'react';

import moment from 'moment';
import h2p from 'html2plaintext';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const style = {
  margin: '1em',
  padding: '5px',
};

const subtextStyle = {
  marginLeft: '20px',
  padding: '5px',
};

function Comment({ data }) {
  return (
    <Card style={style} elevation={3}>
      <CardContent>
        {data.text.split('<p>').map(p => (
          <Typography gutterBottom key={p}>
            {h2p(p)}
          </Typography>
        ))}
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
            onClick={() => console.log('TODO load child comments')}
            disabled={!data.kids || (data.kids && data.kids.length === 0)}
          >
            {(data.kids && data.kids.length + ' replies') || '0 replies'}
          </Button>
        </Container>
      </CardContent>
    </Card>
  )
}

export default Comment;
