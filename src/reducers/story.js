import {
  REQUEST_STORY_START,
  REQUEST_STORY_SUCCESS,
  REQUEST_STORY_FAILURE,
  LOCATION_CHANGED
} from '../constants'

const initialState = {
  list: [],
  open: {},
  isLoading: false,
  hasFailed: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORY_START:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_STORY_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload.data
        ],
        open: action.payload.data,
        isLoading: false
      }
    case REQUEST_STORY_FAILURE:
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
