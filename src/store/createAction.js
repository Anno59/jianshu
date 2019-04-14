import { INIT_LIST, GET_INIT_LIST, CHANGE_INPUT_VALUE, CHANGE_INPUT_LIST, DELETE_INPUT_LIST } from './actionTypes'

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

export const toInitListAction = (value) => ({
  type: INIT_LIST,
  value
});

export const getInitListAction = (value) => ({
  type: GET_INIT_LIST,
  value
});

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/api/todolist')
//       .then((res)=>{
//         const list = res.data.list;
//         dispatch(getInitListAction(list));
//         // console.log(list)
//       })
//       .catch(()=>{console.log('fail')})
//   }
// }