import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style'

const getSearchInfo = (show) => {
  if(show){
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    );
  }else{
    return null;
  }
};

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={400}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
          {
            getSearchInfo(props.focused)
          }
        </SearchWrapper>
      </Nav>
      <Addtion>
        <Button className="writing">
          <i className="iconfont">&#xe6a4;</i>
          写文章</Button>
        <Button className="reg">注册</Button>
      </Addtion>
    </HeaderWrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () =>{
      dispatch(actionCreators.InputFocus());
    },
    handleInputBlur: () =>{
      dispatch(actionCreators.inputBlur());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
