import {
  REQUEST_STORY_START,
  REQUEST_STORY_SUCCESS,
  REQUEST_STORY_FAILURE
} from '../constants';

export const fetchStory = (id) => ({
  types: [REQUEST_STORY_START, REQUEST_STORY_SUCCESS, REQUEST_STORY_FAILURE],
  payload: {
    request:{
      url: `item/${id}.json`
    }
  }
});
