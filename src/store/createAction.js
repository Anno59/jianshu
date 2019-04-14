import {CHANGE_INPUT_VALUE, CHANGE_INPUT_LIST, DELETE_INPUT_LIST, INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type : CHANGE_INPUT_VALUE,
  value
});

export const getBtnClickAction = () => ({
  type : CHANGE_INPUT_LIST,
});

export const getItemDeleteAction = (value) => ({
  type : DELETE_INPUT_LIST,
  value
});

export const getInitListAction = (value) => ({
  type : INIT_LIST,
  value
});