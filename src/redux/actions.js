export const UPDATE_ID_CACHE = 'UPDATE_ID_CACHE';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_VISIBLE_STORIES = 'UPDATE_VISIBLE_STORIES';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

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
