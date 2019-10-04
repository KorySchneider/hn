import { combineReducers } from 'redux';
import {
  UPDATE_ID_CACHE,
  UPDATE_SECTION,
  UPDATE_VISIBLE_STORIES,
  UPDATE_CURRENT_PAGE,
  UPDATE_COMMENTS_OPEN,
  UPDATE_COMMENTS,
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

function currentPage(state = 1, action) {
  switch(action.type) {
    case UPDATE_CURRENT_PAGE:
      return action.page;
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

function comments(state = [], action) {
  switch(action.type) {
    case UPDATE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  idCache,
  section,
  visibleStories,
  currentPage,
  commentsOpen,
  comments,
});

export default rootReducer;
