export const UPDATE_ID_CACHE = 'UPDATE_ID_CACHE';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_VISIBLE_STORIES = 'UPDATE_VISIBLE_STORIES';
export const UPDATE_NEXT_PAGE_BUFFER = 'UPDATE_NEXT_PAGE_BUFFER';
export const UPDATE_PAGE_INDEX = 'UPDATE_PAGE_INDEX';

export function updateIdCache(ids) {
  return {
    type: UPDATE_ID_CACHE,
    ids: ids,
  }
}

export function updateSection(section) {
  return {
    type: UPDATE_SECTION,
    section: section,
  }
}

export function updateVisibleStories(stories) {
  return {
    type: UPDATE_VISIBLE_STORIES,
    stories: stories,
  }
}

export function updateNextPageBuffer(stories) {
  return {
    type: UPDATE_NEXT_PAGE_BUFFER,
    stories: stories,
  }
}

export function updatePageIndex(index) {
  return {
    type: UPDATE_PAGE_INDEX,
    index: index,
  }
}
