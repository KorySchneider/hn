import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { updateCommentsOpen } from '../redux/actions';
import { url } from '../redux/store';
import h2p from 'html2plaintext';

import Comment from './Comment';

import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mapState = state => ({
  commentsOpen: state.commentsOpen,
  comments: state.comments,
  commentsParent: state.commentsParent,
});

const actionCreators = {
  updateCommentsOpen,
};

function Comments({
  commentsOpen,
  comments,
  commentsParent,
  updateCommentsOpen,
}) {
  const [visibleComments, setVisibleComments] = useState([]);

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchComments() {
      let items = [];
      let numToFetch = comments.length < 10 ? comments.length : 10;
      for (let i = 0; i < numToFetch; i++) {
        const item = await fetchItem(comments[i]);
        items.push(item);
      }
      setVisibleComments(items);
    }
    fetchComments();
  }, [comments]);

  if (commentsParent === null) return null;
  return (
    <Modal
      open={commentsOpen}
      onClose={() => updateCommentsOpen(false)}
      style={{ overflowY: 'scroll' }}
    >
      <Container
        maxWidth='md'
        style={{
          outline: 0,
          marginTop: '1em',
          padding: '5px',
        }}
      >
        <Card>
          <CardContent style={{ padding: '1em' }}>
            <Typography variant='h5'>
              {commentsParent.title}
            </Typography>
            {commentsParent.url &&
              <Typography variant='caption' gutterBottom>
                {commentsParent.url.split('/')[2].replace(/^www\./, '')}
              </Typography>
            }
            {commentsParent.text &&
              commentsParent.text.split('<p>').map(p => (
                <Typography gutterBottom key={p}>
                  {h2p(p)}
                </Typography>
              ))
            }
            <Container align='right'>
              <Typography variant='overline'>
                &mdash; {commentsParent.by}
              </Typography>
            </Container>
          </CardContent>
        </Card>

        <Fab
          onClick={() => updateCommentsOpen(false)}
          color='primary'
          style={{
            position: 'fixed',
            bottom: '2em',
            right: '2em',
          }}
        >
          <CloseIcon />
        </Fab>

        {visibleComments.length === 0 &&
          <Container align='center'>
            <CircularProgress style={{margin: '50% auto'}} />
          </Container>
        }
        {visibleComments.map(item => (
          <Comment data={item} key={item.id} />
        ))}
      </Container>
    </Modal>
  )
}

export default connect(mapState, actionCreators)(Comments);
