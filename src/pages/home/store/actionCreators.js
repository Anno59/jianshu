import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
  }
};

export const getHomeInfo = (dispatch) => {
  axios({url:'/api/home.json', method: 'get', responseType: 'json'})
    .then((res)=>{
      const data = res.data.data;
      dispatch(changeHomeData(data));
    });
};