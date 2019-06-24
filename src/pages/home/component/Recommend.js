import React, { PureComponent } from 'react';
import {
  RecommendWrapper,
  RecommendItem,
} from '../style'
import { connect } from 'react-redux';

class Recommend extends PureComponent{
  render(){
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) =>(
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
            )
          )
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);