import React, { Component } from 'react';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom';

class Login extends Component{
  render(){
    if(!this.props.loginState){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input ref={(input) => this.account = input} placeholder="账号"/>
            <Input type="password" ref={(input) => this.pwd = input}  placeholder="密码"/>
            <Button onClick={() => this.props.toLoginIn(this.account.value, this.pwd.value)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'loginIn'])
});

const mapDispatchToProps = (dispatch) => ({
  toLoginIn: (account, pwd) =>{
    dispatch(actionCreators.toLoginIn(account, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);