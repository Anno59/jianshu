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

class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="banner"/>
          <List/>
          <Topic/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;