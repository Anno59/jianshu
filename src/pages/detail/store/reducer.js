import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  "header": "",
  "content": ""
});

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.GET_LIST:
      return state.merge({
        header: action.header,
        content: action.content
      })
  }
  return state;
}