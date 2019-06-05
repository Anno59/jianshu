import React, { Component } from 'react';
import {
  TopicWrapper,
  TopicItem,
} from '../style'
import { connect } from 'react-redux';

class Topic extends Component{
  render(){
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((list)=>(
            <TopicItem key={list.get('id')}>
              <img
                className="topic-pic"
                src={list.get('imgUrl')}
                alt=""/>
              {list.get('title')}
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

export default connect(mapStateToProps, null)(Topic);