import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { updateCommentsOpen } from '../redux/actions';
import fetchItem from '../util/fetchItem';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import h2p from 'html2plaintext';
import moment from 'moment';

import Comment from './Comment';
import CardSubtextItem, { cardSubtextStyle } from './CardSubtextItem';
import Spinner from './Spinner';

import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

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
  const [fetching, setFetching] = useState(false);
  const commentsPageSize = 10;

  const scrollRef = useBottomScrollListener(() => {
    if (commentsOpen &&
        visibleComments.length <= commentsPage * commentsPageSize) {
      setCommentsPage(commentsPage => ++commentsPage);
    }
  });

  useEffect(() => {
    async function fetchComments() {
      if (!commentsOpen) {
        setFetching(false);
        return;
      }
      if (visibleComments.length < commentsPage * commentsPageSize) {
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
      setFetching(false);
    }
    setFetching(true);
    fetchComments();
  }, [comments, commentsPage, commentsOpen, visibleComments]);

  const handleCloseClick = () => {
    updateCommentsOpen(false);
    setVisibleComments([]);
    setCommentsPage(1);
  };

  const openYCombinatorLink = () => {
    window.open(
      `https://news.ycombinator.com/item?id=${commentsParent.id}`,
      '_blank'
    );
  };

  const openStoryLink = () => {
    window.open(commentsParent, '_blank');
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
        {/* Parent Story */}
        <Slide
          direction='up'
          mountOnEnter
          unmountOnExit
          in={commentsOpen}
        >
          <Card raised>
            <CardContent style={{ padding: '1em' }}>
              <Typography
                variant='h5'
                onClick={openStoryLink}
                style={commentsParent.url && { cursor: 'pointer' }}
              >
                {commentsParent.title}
              </Typography>
              {commentsParent.url &&
                <Typography
                  variant='caption'
                  onClick={openStoryLink}
                  style={{ cursor: 'pointer' }}
                >
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
                <Button
                  style={cardSubtextStyle}
                  size='small'
                  onClick={openYCombinatorLink}
                >
                  View on YC
                </Button>
              </Container>
            </CardActions>
          </Card>
        </Slide>

        {/* Close Button */}
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

        {/* Comments */}
        {visibleComments.map((item, i) => (
          <Comment
            data={item}
            key={item.id}
            timeout={0}
            depth={0}
          />
        ))}

        {/* Spinner */}
        {fetching && <Spinner />}
      </Container>
    </Modal>
  );
}

export default connect(mapState, actionCreators)(Comments);
