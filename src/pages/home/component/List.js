import React, { Component } from 'react';
import {
  ListItem,
  ListInfo,
} from '../style'
import { connect } from 'react-redux';

class List extends Component{
  render(){
    return (
      <div>
        {
          this.props.articleList.map((list)=>(
            <ListItem key={list.get('id')}>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps)(List);