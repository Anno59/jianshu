import React, { Component } from 'react';
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import Topic from './component/Topic'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="banner"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount(){
    axios({url:'/api/home.json', method: 'get', responseType: 'json'})
      .then((res)=>{
      const data = res.data.data;
      const action = {
        type: 'change_home_data',
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList,
      };
      this.props.changeHomeData(action);
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);