import * as constants from './constants'

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