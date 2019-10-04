import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { updateCommentsOpen } from '../redux/actions';
import { url } from '../redux/store';

import Modal from '@material-ui/core/Modal';

const mapState = state => ({
  commentsOpen: state.commentsOpen,
  comments: state.comments,
});

const actionCreators = {
  updateCommentsOpen,
};

function Comments({ commentsOpen, comments, updateCommentsOpen }) {
  const [commentObjects, setCommentObjects] = useState([]);

  async function fetchItem(id) {
    const response = await fetch(`${url}/item/${id}.json`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    async function fetchComments() {
      let items = [];
      for (let i = 0; i < comments.length; i++) {
        const item = await fetchItem(comments[i]);
        items.push(item);
      }
      items = items.filter(item => item.type === 'comment');
      setCommentObjects(items);
    }
    fetchComments();
  }, [comments]);

  return (
    <Modal
      open={commentsOpen}
      onClose={() => updateCommentsOpen(false)}
    >
      <div>
        {commentObjects.map(comment => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>
    </Modal>
  )
}

export default connect(mapState, actionCreators)(Comments);
