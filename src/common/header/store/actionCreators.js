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

export const MouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER,
  }
};

export const MouseLeave = () => {
  return {
    type : constants.MOUSE_LEAVE,
  }
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get(process.env.PUBLIC_URL + '/api/trending_search.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data))
      })
      .catch();
  }
};

export const handleInputClick = (currentPage) => {
  return {
    type : constants.CLICK_MORE,
    value : currentPage,
  }
};