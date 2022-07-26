import { getLocalStorage } from '../../utils/localStorage';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_ROM_FAVORITE } from '../constants/actionTypes'

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_ROM_FAVORITE:
      const { [action.payload]: { }, ...rest } = state
      return {
        ...rest
      }
    default: return state;
  }
}

export default favoriteReducer;