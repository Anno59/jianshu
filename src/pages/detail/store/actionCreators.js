import axios from 'axios';
import * as constants from './constants';

const changeDetailData = (data) => ({
  type: constants.GET_LIST,
  content: data.content,
  header: data.header,
});

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const data = res.data.data;
      dispatch(changeDetailData(data))
    })
  }
};