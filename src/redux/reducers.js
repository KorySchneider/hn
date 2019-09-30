import { combineReducers } from 'redux';
import {
  UPDATE_ID_CACHE,
  UPDATE_SECTION,
  UPDATE_VISIBLE_STORIES,
  UPDATE_VISIBLE_VALID,
  UPDATE_CURRENT_PAGE,
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

function currentPage(state = 1, action) {
  switch(action.type) {
    case UPDATE_CURRENT_PAGE:
      return action.page;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  idCache,
  section,
  visibleStories,
  visibleValid,
  currentPage,
});

export default rootReducer;
