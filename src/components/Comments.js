import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { updateCommentsOpen } from '../redux/actions';
import fetchItem from '../util/fetchItem';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import h2p from 'html2plaintext';
import moment from 'moment';

import Comment from './Comment';
import CardSubtextItem from './CardSubtextItem';
import Spinner from './Spinner';

import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

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
  const [commentsPage, setCommentsPage] = useState(1);
  const commentsPageSize = 10;

  const scrollRef = useBottomScrollListener(() => {
    if (visibleComments.length <= commentsPage * commentsPageSize) {
      setCommentsPage(commentsPage => ++commentsPage);
    }
  });

  useEffect(() => {
    async function fetchComments() {
      if (!commentsOpen) return;
      if (visibleComments.length === 0 ||
      (visibleComments.length <= (commentsPage - 1) * commentsPageSize &&
      comments.length >= commentsPage * commentsPageSize)) {
        let items = [];
        const ids = comments.slice(
          (commentsPage * commentsPageSize) - commentsPageSize,
          commentsPage * commentsPageSize
        );
        for (let i = 0; i < ids.length; i++) {
          const item = await fetchItem(ids[i]);
          items.push(item);
        }
        // Filter duplicate and null items
        items = items.filter(item => {
          if (item === null) return false;
          if (item.dead || item.deleted) return false;
          for (let i = 0; i < visibleComments.length; i++) {
            if (item.id === visibleComments[i].id)
              return false;
          }
          return true;
        });
        if (items.length > 0) {
          setVisibleComments(visibleComments.concat(items));
        }
      }
    }
    fetchComments();
  }, [comments, commentsPage, visibleComments]);

  const handleCloseClick = () => {
    updateCommentsOpen(false);
    setVisibleComments([]);
    setCommentsPage(1);
  };

  if (commentsParent === null) return null;
  return (
    <Modal
      open={commentsOpen}
      onClose={handleCloseClick}
      style={{ overflowY: 'scroll' }}
      ref={scrollRef}
    >
      <Container
        maxWidth='md'
        style={{
          outline: 0,
          marginTop: '1em',
          padding: '5px',
        }}
      >
        <Slide
          direction='up'
          mountOnEnter
          unmountOnExit
          in={commentsOpen}
        >
          <Card raised>
            <CardContent style={{ padding: '1em' }}>
              <Typography variant='h5'>
                {commentsParent.title}
              </Typography>
              {commentsParent.url &&
                <Typography variant='caption'>
                  {commentsParent.url.split('/')[2].replace(/^www\./, '')}
                </Typography>
              }
              {commentsParent.text &&
                commentsParent.text.split('<p>').map(p => (
                  <Typography key={p}>
                    {h2p(p)}
                  </Typography>
                ))
              }
            </CardContent>

            <CardActions>
              <Container align='right'>
                <CardSubtextItem
                  text={<span>&mdash; {commentsParent.by}</span>}
                />
                <CardSubtextItem
                  text={moment.unix(commentsParent.time).fromNow()}
                />
              </Container>
            </CardActions>
          </Card>
        </Slide>

        <Fab
          onClick={handleCloseClick}
          color='primary'
          style={{
            position: 'fixed',
            bottom: '2em',
            right: '2em',
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </Fab>

        {visibleComments.map((item, i) => (
          <Comment
            data={item}
            key={item.id}
            timeout={0}
            depth={0}
          />
        ))}

        <Spinner />
      </Container>
    </Modal>
  )
}

export default connect(mapState, actionCreators)(Comments);
