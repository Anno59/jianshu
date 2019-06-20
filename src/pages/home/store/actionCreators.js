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

const addMoreData = (data) => {
  return {
    type: constants.ADD_MORE_DATA,
    articleList: data.articleList,
  }
};

export const getHomeInfo = () => {
  return (dispatch) => {
    axios({url:'/api/home.json', method: 'get', responseType: 'json'})
      .then((res)=>{
        const data = res.data.data;
        dispatch(changeHomeData(data));
      });
  }
};

export const getMoreList = () => {
  return (dispatch) => {
    axios.get(process.env.PUBLIC_URL + '/api/homeList.json')
      .then((data) => {
        const listData= data.data.data;
        // console.log(listData);
        dispatch(addMoreData(listData));
    })
  }
};

export const getBackTopState = (state) => ({
    type: constants.TOGGLE_SHOW_BACKTOP,
    value: state,
});