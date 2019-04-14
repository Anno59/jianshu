import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { toInitListAction } from './createAction'

function* getInitList(){
  try{
    const data = yield axios.get('/api/todolist');
    const {list} = data.data;
    const action = toInitListAction(list);
    yield put(action);
  }catch(e){

  }
  // console.log(action)
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;