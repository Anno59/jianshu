import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'), //异步加载组件
  loading: () => (
    <div>Loading...</div>
  ), //
});

export default () => <LoadableComponent/>