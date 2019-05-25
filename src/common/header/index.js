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

class Header extends Component{
  getSearchInfo(){
    const { focused, list, handleInputClick, handleMouseEnter, handleMouseLeave, mouseEnter} = this.props;
    let newList = list.toJS();
    const page = Math.ceil(newList.length / 10);
    let current = 1;
    let pageContent = [];
    // for(let current = 1; current < page; current++){
      for(let i = (current - 1) * 10 ; i < (current * 10); i++){
        pageContent.push(newList[i]);
      }
    // }

    if(focused || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleInputClick(this.spin)}>
              <i ref={(input) => this.spin = input} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageContent.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    }else {
      return null;
    }
  }

  render(){
    const { focused, handleInputFocus, handleInputBlur} = this.props;
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
              in={focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
            {
              this.getSearchInfo()
            }
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Button className="writing">
            <i className="iconfont">&#xe61c;</i>
            写文章</Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header', 'list']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () =>{
      dispatch(actionCreators.getList());
      dispatch(actionCreators.InputFocus());
    },
    handleInputBlur: () =>{
      dispatch(actionCreators.inputBlur());
    },
    handleInputClick: (spin) =>{
      console.log(spin)
      // dispatch(action)
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.MouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.MouseLeave());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
