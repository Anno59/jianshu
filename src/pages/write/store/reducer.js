import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  "header": "",
  "content": ""
});

export default (state = defaultState, action) => {
  return state;
}