import React, { PureComponent } from 'react';
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import Topic from './component/Topic'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style'
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends PureComponent{
  backTop(){
    window.scrollTo(0, 0);
  }

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
          {/*<Writer/>*/}
        </HomeRight>
        {
          this.props.showBackTop ? <BackTop onClick={this.backTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvent();
  }

  bindEvent(){
    window.addEventListener('scroll', this.props.toggleShowBackTop)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.toggleShowBackTop);
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  toggleShowBackTop() {
    let offset = window.pageYOffset;
    if (offset > 400) {
      dispatch(actionCreators.getBackTopState(true));
    }else{
      dispatch(actionCreators.getBackTopState(false));
    }
  }
});

const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['home', 'toggleShowBackTop'])
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);