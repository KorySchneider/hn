import { combineReducers } from 'redux';
import {
  UPDATE_ID_CACHE,
  UPDATE_SECTION,
  UPDATE_VISIBLE_STORIES,
  UPDATE_NEXT_PAGE_BUFFER,
  UPDATE_PAGE_INDEX,
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

const rootReducer = combineReducers({
  idCache,
  section,
  visibleStories,
  nextPageBuffer,
  pageIndex,
});

export default rootReducer;
