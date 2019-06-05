import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  currentPage: 1,
  focused: false,
  list: [],
  mouseEnter: false,
});

export default (state = defaultState, action) =>{
  switch (action.type){
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.value);
    case constants.MOUSE_ENTER:
      return state.set('mouseEnter', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseEnter', false);
    case constants.CLICK_MORE:
      return state.merge({
        'currentPage': action.value
      });
    default:
  }
  return state;
};

