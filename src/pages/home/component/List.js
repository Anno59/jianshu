import React, { Component } from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store'

class List extends Component{
  render(){
    const { articleList, loadMoreData } = this.props;
    return (
      <div>
        {
          articleList.map((list, index)=>(
            <ListItem key={index}>
              <img className="pic" src={list.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className="title">{list.get('title')}</h3>
                <p className="desc">
                  {list.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={loadMoreData}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});

const mapDispatchToProps = (dispatch) => ({
  loadMoreData(){
    const action = actionCreators.getMoreList();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);