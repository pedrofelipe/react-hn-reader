import {
  REQUEST_STORY_COMMENTS_START,
  REQUEST_STORY_COMMENTS_SUCCESS,
  REQUEST_STORY_COMMENTS_FAILURE
} from '../constants';

export const fetchStoryComments = (id) => ({
  types: [REQUEST_STORY_COMMENTS_START, REQUEST_STORY_COMMENTS_SUCCESS, REQUEST_STORY_COMMENTS_FAILURE],
  payload: {
    request:{
      url: `item/${id}.json`
    }
  },
});
