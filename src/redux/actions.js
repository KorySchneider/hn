export const UPDATE_ID_CACHE = 'UPDATE_ID_CACHE';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_VISIBLE_STORIES = 'UPDATE_VISIBLE_STORIES';
export const UPDATE_VISIBLE_VALID = 'UPDATE_VISIBLE_VALID';
export const UPDATE_NEXT_PAGE_BUFFER = 'UPDATE_NEXT_PAGE_BUFFER';
export const UPDATE_PAGE_INDEX = 'UPDATE_PAGE_INDEX';
export const UPDATE_COMMENTS_OPEN = 'UPDATE_COMMENTS_OPEN';
export const UPDATE_COMMENTS_ID = 'UPDATE_COMMENTS_ID';

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

export function updateVisibleValid(valid) {
  return {
    type: UPDATE_VISIBLE_VALID,
    valid: valid,
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

export function updateCommentsOpen(open) {
  return {
    type: UPDATE_COMMENTS_OPEN,
    open: open,
  }
}

export function updateCommentsId(id) {
  return {
    type: UPDATE_COMMENTS_ID,
    id: id,
  }
}
