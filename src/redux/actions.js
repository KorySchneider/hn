export const UPDATE_ID_CACHE = 'UPDATE_ID_CACHE';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_VISIBLE_STORIES = 'UPDATE_VISIBLE_STORIES';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const UPDATE_COMMENTS_OPEN = 'UPDATE_COMMENTS_OPEN';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const UPDATE_COMMENTS_PARENT = 'UPDATE_COMMENTS_PARENT';

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

export function updateCurrentPage(page) {
  return {
    type: UPDATE_CURRENT_PAGE,
    page: page,
  }
}

export function updateCommentsOpen(open) {
  return {
    type: UPDATE_COMMENTS_OPEN,
    open: open,
  }
}

export function updateComments(comments) {
  return {
    type: UPDATE_COMMENTS,
    comments: comments,
  }
}

export function updateCommentsParent(parent) {
  return {
    type: UPDATE_COMMENTS_PARENT,
    parent: parent,
  }
}
