import React, { PureComponent } from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
  render(){
    const { articleList, loadMoreData } = this.props;
    return (
      <div>
        {
          articleList.map((list, index)=>(
          <Link key={index} to={`./detail/${list.get('id')}`}>
            <ListItem>
              <img className="pic" src={list.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className="title">{list.get('title')}</h3>
                <p className="desc">
                  {list.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          </Link>
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