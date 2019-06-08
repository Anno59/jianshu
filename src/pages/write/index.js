import React, { Component } from 'react';
import {
  DetailWrapper,
  Header,
  Content,
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Write extends Component{
  render(){
    if(this.props.loginIn){
      return (
        <DetailWrapper>
          <Header>写文章</Header>
          <Content/>
        </DetailWrapper>
      )
    }else{
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginIn: state.getIn(['login', 'loginIn']),
  }
};

export default connect(mapStateToProps, null)(Write);