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
  ],
  articleList: [
    {
      id: 1,
      desc: '我是一个基层公务员，公务员的工资，似乎是个敏感的话题。目前比较一致的看法是，经过几轮涨薪之后，公务员的工资算不上高，但应当处于当地平均偏上的水准...',
      title: '基层公务员生存现状：工资究竟够不够花？',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 2,
      desc: '我是一个基层公务员，公务员的工资，似乎是个敏感的话题。目前比较一致的看法是，经过几轮涨薪之后，公务员的工资算不上高，但应当处于当地平均偏上的水准...',
      title: '基层公务员生存现状：工资究竟够不够花？',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 3,
      desc: '我是一个基层公务员，公务员的工资，似乎是个敏感的话题。目前比较一致的看法是，经过几轮涨薪之后，公务员的工资算不上高，但应当处于当地平均偏上的水准...',
      title: '基层公务员生存现状：工资究竟够不够花？',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
  ]
});

export default (state = defaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
}