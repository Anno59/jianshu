const defaultState = {
  inputValue:'haha',
  list:[]
};

export default (state = defaultState, action) => {
  let newState;
  switch(action.type){
    case 'change_input_value':
      newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.inputValue;
      // console.log(newState);
      return newState;
    case 'click_button':
      newState = JSON.parse(JSON.stringify(state));
      newState.list = [...newState.list, action.inputValue];
      // console.log(newState);
      return newState;
  }

  return state;
}