import React, { Component } from 'react';
import {
  TopicWrapper,
  TopicItem,
} from '../style'
import { connect } from 'react-redux';

class Topic extends Component{
  render(){
    const topicList = this.props.topicList.toJS();
    return (
      <TopicWrapper>
        {
          topicList.map((list)=>(
            <TopicItem key={list.id}>
              <img
                className="topic-pic"
                src={list.imgUrl}
                alt=""/>
              {list.title}
            </TopicItem>)
          )
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList : state.getIn(['home', 'topicList'])
  }
};

export default connect(mapStateToProps)(Topic);