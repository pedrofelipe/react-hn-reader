import {
  REQUEST_STORY_COMMENTS_START,
  REQUEST_STORY_COMMENTS_SUCCESS,
  REQUEST_STORY_COMMENTS_FAILURE
} from '../constants'

const initialState = {
  list: [],
  isLoading: false,
  hasFailed: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORY_COMMENTS_START:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_STORY_COMMENTS_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload.data,
        ]
      }
    case REQUEST_STORY_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      }
    default:
      return state
  }
}
