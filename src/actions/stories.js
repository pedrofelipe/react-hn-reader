import {
  REQUEST_STORIES_START,
  REQUEST_STORIES_SUCCESS,
  REQUEST_STORIES_FAILURE
} from '../constants';

export const fetchStories = (id) => ({
  types: [REQUEST_STORIES_START, REQUEST_STORIES_SUCCESS, REQUEST_STORIES_FAILURE],
  payload: {
    request:{
      url: `item/${id}.json`
    }
  }
});
