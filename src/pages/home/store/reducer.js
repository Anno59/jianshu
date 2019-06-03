import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList:[
    {
      id: 1,
      title: '测试下1',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 2,
      title: '测试下2',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 3,
      title: '测试下3',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
  ]
});

export default (state = defaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
}