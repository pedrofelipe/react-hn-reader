import {
  REQUEST_STORIES_START,
  REQUEST_STORIES_SUCCESS,
  REQUEST_STORIES_FAILURE,
  LOCATION_CHANGED
} from '../constants'

const initialState = {
  list: [],
  isLoading: false,
  hasFailed: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORIES_START:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_STORIES_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload.data
        ],
        isLoading: false
      }
    case REQUEST_STORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      }
    case LOCATION_CHANGED:
      return {
        ...state,
        list: [],
      }
    default:
      return state
  }
}
