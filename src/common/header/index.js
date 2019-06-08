import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

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

class Header extends PureComponent{
  getSearchInfo(){
    let {
      focused,
      list,
      handleInputClick,
      handleMouseEnter,
      handleMouseLeave,
      mouseEnter,
      currentPage,
    } = this.props;

    let newList = list.toJS();
    const page = Math.ceil(newList.length / 10);
    let pageContent = [];

    for(let i = (currentPage - 1) * 10 ; i < (currentPage * 10); i++){
      if(newList[i] === undefined){
        break;
      }
      pageContent.push(newList[i]);
    }

    if(focused || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleInputClick(currentPage, page, this.spin)}>
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
    const { focused, handleInputFocus, handleInputBlur, list, loginOut, loginIn} = this.props;
    return (
      <HeaderWrapper>
        <Link to='./'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            loginIn
            ? <NavItem onClick={loginOut} className="right">登出</NavItem>
            : <Link to="login">
                <NavItem className="right">登录</NavItem>
              </Link>
          }
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
                onFocus={() => handleInputFocus(list)}
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
          {
            loginIn ? null : <Button className="reg">注册</Button>
          }
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
    currentPage: state.getIn(['header', 'currentPage']),
    loginIn: state.getIn(['login', 'loginIn']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) =>{
      !list.size && dispatch(actionCreators.getList());
      dispatch(actionCreators.InputFocus());
    },
    handleInputBlur: () =>{
      dispatch(actionCreators.inputBlur());
    },
    handleInputClick: (currentPage, page, spin) =>{
      currentPage = currentPage === page ? 1 : currentPage + 1;

      dispatch(actionCreators.handleInputClick(currentPage));

      let rotateAngle = spin.style.transform === '' ? 0 : spin.style.transform.replace(/\D/g, '');
      rotateAngle = parseInt(rotateAngle, 10) + 360;
      spin.style.transform = `rotate(${rotateAngle}deg)`;
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.MouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.MouseLeave());
    },
    loginOut: () => {
      dispatch(loginActionCreators.loginOut())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
