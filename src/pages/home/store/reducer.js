import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList:[],
  articleList: [],
  recommendList:[],
  toggleShowBackTop: false,
});


export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
      });
    case constants.ADD_MORE_DATA:
      const oldList = state.get('articleList').toJS();
      return state.set(
        'articleList', fromJS([...oldList, ...action.articleList]),
      );
    case constants.TOGGLE_SHOW_BACKTOP:
      return state.set('toggleShowBackTop', action.value);
    default:
      return state;
  }
}