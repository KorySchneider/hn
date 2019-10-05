import React from 'react';

import moment from 'moment';
import h2p from 'html2plaintext';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
    <Card style={style} raised>
      <CardContent>
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
            onClick={() => console.log('TODO load child comments')}
            disabled={!data.kids || (data.kids && data.kids.length === 0)}
          >
            {(data.kids && data.kids.length + ' replies') || '0 replies'}
          </Button>
        </Container>
      </CardActions>
    </Card>
  )
}

export default Comment;
