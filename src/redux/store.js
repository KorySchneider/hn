import { createStore } from 'redux';
import rootReducer from './reducers';

export const url = 'https://hacker-news.firebaseio.com/v0';
export const pageSize = 10;
export const localStorageViewedKey = 'hnViewed';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
