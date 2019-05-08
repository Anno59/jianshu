import * as constants from './constants'
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (value) => {
  return {
    type: constants.CHANGE_LIST,
    value: fromJS(value),
  }
};

export const InputFocus = () => (
  {
    type : constants.SEARCH_FOCUS,
  }
);

export const inputBlur = () => {
  return {
    type : constants.SEARCH_BLUR,
  }
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/trending_search')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data))
      })
      .catch();
  }
};
