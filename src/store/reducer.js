import {CHANGE_INPUT_VALUE, CHANGE_INPUT_LIST, DELETE_INPUT_LIST, INIT_LIST} from './actionTypes'

const defaultState = {
    value: '',
    list: []
};

export default (state = defaultState, action) =>{
  // console.log(state, action)
  if(action.type){
    let newState;
    switch(action.type){
      case CHANGE_INPUT_VALUE:
        newState = JSON.parse(JSON.stringify(state));
        newState.value = action.value;
        return newState;
      case CHANGE_INPUT_LIST:
        newState = JSON.parse(JSON.stringify(state));
        newState.list = [...state.list, state.value];
        newState.value = '';
        return newState;
      case DELETE_INPUT_LIST:
        newState = JSON.parse(JSON.stringify(state));
        newState.list = [
          ...state.list.slice(0, action.value),
          ...state.list.slice(action.value + 1)
        ];
        return newState;
      case INIT_LIST:
        newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
  }
  return state
}