import React, { Component } from 'react';
import {
  DetailWrapper,
  Header,
  Content,
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component{
  render(){
    return (
      <DetailWrapper>
        <Header>{ this.props.header }</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
      </DetailWrapper>
    )
  }

  componentDidMount(){
    this.props.getDetailInfo();
  }
}

const mapStateToProps = (state) => ({
  header: state.getIn(['detail', 'header']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
    getDetailInfo: () => {
      dispatch(actionCreators.getDetailData())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);