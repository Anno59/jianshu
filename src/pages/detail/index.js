import React, { Component } from 'react';
import {
  DetailWrapper,
  Header,
  Content,
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

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
    const id = this.props.match.params.id;
    this.props.getDetailInfo(id);
  }
}

const mapStateToProps = (state) => ({
  header: state.getIn(['detail', 'header']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
    getDetailInfo: (id) => {
      dispatch(actionCreators.getDetailData(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));