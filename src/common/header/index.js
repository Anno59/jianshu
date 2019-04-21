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
} from './style'

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
    focused: state.header.get('focused'),
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
