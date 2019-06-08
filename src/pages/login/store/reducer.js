import { fromJS } from 'immutable';
import  * as constants  from './constants'

const defaultState = fromJS({
  loginIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.LOGIN_OUT:
      return state.set('loginIn', false);
    case constants.LOGIN_IN:
      return state.set('loginIn', true);
  }
  return state;
}