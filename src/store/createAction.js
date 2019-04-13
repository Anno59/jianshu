import {CHANGE_INPUT_VALUE, CHANGE_INPUT_LIST, DELETE_INPUT_LIST} from './actionTypes'

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