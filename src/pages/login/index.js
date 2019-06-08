import React, { Component } from 'react';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';

class Login extends Component{
  render(){
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号"/>
          <Input placeholder="密码"/>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

export default Login;