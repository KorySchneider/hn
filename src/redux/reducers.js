import { combineReducers } from 'redux';
import {
  UPDATE_ID_CACHE,
  UPDATE_SECTION,
  UPDATE_VISIBLE_STORIES,
  UPDATE_VISIBLE_VALID,
  UPDATE_NEXT_PAGE_BUFFER,
  UPDATE_PAGE_INDEX,
  UPDATE_COMMENTS_OPEN,
  UPDATE_COMMENTS_ID,
} from './actions';

function idCache(state = [], action) {
  switch(action.type) {
    case UPDATE_ID_CACHE:
      return action.ids;
    default:
      return state;
  }
}

function section(state = 'top', action) {
  switch(action.type) {
    case UPDATE_SECTION:
      return action.section;
    default:
      return state;
  }
}

function visibleStories(state = [], action) {
  switch(action.type) {
    case UPDATE_VISIBLE_STORIES:
      return action.stories;
    default:
      return state;
  }
}

function visibleValid(state = true, action) {
  switch(action.type) {
    case UPDATE_VISIBLE_VALID:
      return action.valid;
    default:
      return state;
  }
}

function nextPageBuffer(state = [], action) {
  switch(action.type) {
    case UPDATE_NEXT_PAGE_BUFFER:
      return action.stories;
    default:
      return state;
  }
}

function pageIndex(state = 0, action) {
  switch(action.type) {
    case UPDATE_PAGE_INDEX:
      return action.index;
    default:
      return state;
  }
}

function commentsOpen(state = false, action) {
  switch(action.type) {
    case UPDATE_COMMENTS_OPEN:
      return action.open;
    default:
      return state;
  }
}

function commentsId(state = null, action) {
  switch(action.type) {
    case UPDATE_COMMENTS_ID:
      return action.id;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  idCache,
  section,
  visibleStories,
  visibleValid,
  nextPageBuffer,
  pageIndex,
  commentsOpen,
  commentsId,
});

export default rootReducer;
