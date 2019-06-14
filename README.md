# 简书

### 说明

官网 https://www.jianshu.com 
仿登入，首页，文章详情

### 技术栈

- redux-immutable
- react-router
- axios
- react-redux
- redux-thunk
- styled-component

### 使用说明

npm i --save

### 部分笔记

# 1
熟悉ES6
# 2
**脚手架**

>  快速构建大型项目的开发流程与目录，以一定的文件关系管理`script`文件的相互引用

**工程目录简介**

```
-package-lock : 文件依赖的版本号等信息

-package.json : node包文件，让项目变成node包

-src

--index.js ：整个项目的入口

--registerServerWorker :处理PWA缓存服务，使页面离线也能使用

-public 

--mainfest.json ：定义app桌面快捷方式信息（PWA）
```
----

- 继承`Component`都是组件
- `ReactDOM`： 第三方依赖包，可以将`react`组件挂在DOM文档上
- 使用了`JSX`必须引用`react`
- 组件必须大写开头

# 3
- `Fragment`占位符组件：替换传统`react`外层嵌套`div`
- `JSX`中写变量要{}，嵌套在JS语句中的`JSX`使用JS变量也要写{}
```
<Fragment>
    <ul>
        {
            inputValue.map((e, index)=>{
                return <li key={index}>{e}</li>
            })
        }
    </ul>
</Fragment>
```
- 不要使用`index`做`key`
- 只要操作`setState`就能进行`dom`节点数据的映射更新，省去传统`dom`操作
- `immutable` //不能直接修改`state`数据，要修改必须拷贝，然后对拷贝的对象修改
- `JSX`中注释用{/**/}或者{//}
- 插入原生`dangerouslySetInnerHTML={__html:value}`
- `label-htmlFor`
- 页面统一的绑定放在顶部，不然影响性能
- `JSX`内有逻辑记得抽取精简
- 异步`setState`，回调参数`prevState` //`prevState`改变前的参数，避免误修改state的状态

----

- 声明式开发：操作变量，不操作`dom`
- 可与其他框架并存：只管理直接挂载的节点
- 组件化：组件元素大写，树状结构嵌套，父通过`props`传值，子通过父传递的回调函数进行通信
- 单向数据流：父组件可以传值给子组件，但子组件不能修改，如果多个子组件同时修改某个状态，很难定位调试
- 视图层框架：大型组件通信问题，不相邻的组件之间想通信产生的就非常冗余
- 函数式编程：面向测试式开发，方便自动化测试

# 4
**PropType**

> `state`状态类型验证

```
import Proptypes from 'prop-types'
Component.propType
```

[PropType官方文档](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

- 当组件的state或者props，render就会重新执行

**虚拟DOM**

> 本身是一个对象，描述代表自己节点和子节点信息

```
{
    element:
    attr:
    content:{
        element:...
    }
}
```


**页面更新方案**

*old*

1. 生成真实DOM，对比之前DOM，找差异
2. 用差异的部分元素节点替换之前变化的节点

*new*

1. 生成虚拟DOM后生成真实DOM
2. state变化后，生成虚拟DOM和之前的虚拟DOM进行对比
3. 找出差异直接操作变化的真实DOM

JSX -> createElement -> JS对象（虚拟DOM）-> 真实DOM

```
return React.createElement('li', {}, React.createElement('li', {}, 'h=oh'));
--
与JSX原理相同
return <li><li>h=oh</li></li>
```
优点：

1. 性能提升，由DOM比对，变成JS对象比对
2. 跨端，RN实现

**Diff算法**
> 同层比对；key值的正确使用，不要使用index做key

1. setState异步提升性能，多次非常短的setState操作时会合并成一个操作

**ref**
> 动画需要直接获取当前ref

**生命周期函数**
> 在组件运行某一时刻会自动运行的函数

```
*1* Init //初始化

initial
> 初始化组件的基本数据

*2* mounting //挂载

componentWillMount
> 组件即将被挂载到页面自动执行

render

componentDidMount

*3* Updation //更新

shouldComponentUpdate

componentWillUpdate

render

componentDidUpdate

componentWillReceiveProps
1. render后执行
2. 当前组件是否已经被挂载

*4* Unmount //移除

componentWillUnmount

```

**charles mock数据**
> 代理网址返回的数据

**react-transition-group**
> 动画控件，管理动画开始到结束的样式，还能使用钩子进行某个时刻的管理
```
<CSSTransition
in //与state状态绑定控制状态
setTime //与style中transition的duration值相同
classNames='name' //定义声明周期类名标识
>
name-enter
name-enter-active
name-exit
name-exit-active
```
TransitionGroup

# 5
**Redux工作流程**
```
- Component -> Dispatch -> Store -> Reducer
- Reducer -> Store -> Component
```

*Store*

结构
```
1. state,listeners
2. dispatch()
3. getState()
4. subscribe()

运用store执行顺序

1. createStore(reducer)
2. subscribe(callFunction)
3. dispatch(action)
- reducer(state,action)[更新state]
- subscribe(listeners)
```

**Antd**

```
1. import antd/dist/antd.css
2. import Component
3. use Component
```

- 防止action.type的字串拼错带来的调试不变，可以使用常量替换
- 提取页面中的action到createAction中，提高可维护性，且方便自动化测试
- store唯一性
- 只有store内部改变自己的数据
- reducer必须是纯函数（固定输入固定输出：不能有异步或者当前时间赋值等操作；不能有副作用）
# 6
- UI（Dumb组件）和业务容器（Smart）组件分离
- 只有render的组件可以转换为无状态组件，不继承Component的生命周期函数，性能更优；定义成无状态组件后，该组件会默认有个props形参接收父组件的传递

**redux中间件**
> 在action和store中间对dispatch进行功能提升的封装。同时将异步业务从组件中抽离，方便自动化测试

*redux-thunk*
> 将dispatch action以函数的形式将异步操作导入到中间件，将react和redux职责划分清晰，不需要让关注界面的react去处理redux数据回调顺序dispatch

1. store index导入thunk
- { applyMiddleware } redux 
- applyMiddleware(thunk)
2. dispatch action(func(dispatch){dispatch(action)}) 


与其它中间件配置redux devtool

*redux-saga*
> 通过store dispatch后触发saga里的注册过的generator中的takeEvery，takeEvery执行对应action.type的generator，该generator完成异步操作后派发action

[使用步骤](https://github.com/redux-saga/redux-saga)

**react-redux**

1. Provider传递store给children组件
2. 通过connect进行mapStateToProps取state属性和mapDispatchToProps对执行函数操作和state的dispatch
3. connect返回一个容器组件


**axios**

axios.get().then(()=>{});


# 7
- import引用css时，所有的组件都能共享，会耦合使用

style-component
- 使用全局样式使用模板标签createGlobalStyle
- Box->Wrapper
- &. (css选择器与&符号中间无空格)

```
componentWillMount () {
  store.subscribe(() => this._updateProps())
}

_updateProps () {
  const { store } = this.context
  let stateProps = mapStateToProps
    ? mapStateToProps(store.getState(), this.props)
    : {} // 防止 mapStateToProps 没有传入
  let dispatchProps = mapDispatchToProps
    ? mapDispatchToProps(store.dispatch, this.props)
    : {} // 防止 mapDispatchToProps 没有传入
  this.setState({
    allProps: {
      ...stateProps,
      ...dispatchProps,
      ...this.props
    }
  })
}
```

**example**
```
export const Logo = styled.a.attrs({
  href: './' //定义a标签属性
})`
  &.left{  //标签上有left类则应用该css规则
    position: absolute;
  }
  &::placerholder{ //修改当前placeholder样式
    color: #999;
  }
  .iconfont { //修改所有子iconfont类样式
    
    &.active{ //同时满足.iconfont.actived样式
        
    }  
  }
  background: url(${logoPic}); //引入url
`;
```

**reducer的拆分**
> reducer参杂太多的action变的很难维护，对不同功能模块下的功能进行拆分

```
{combineReducers} from 'redux'

combineReducers({
    componentName : reducer
})
```

```
export const SEARCH_FOCUS = 'header/SEARCH_FOCUS' //不同组件的action进行目录的区分方便维护
```

- 外部组件访问store中的文件，可在store的出口文件index中访问
```
//index.js 
import reducer from './reducer';
import * as actionCreators from './actionCreators'
import * as constants from './constants'

```

**immutable**
> 保证state不会被无意中修改
```
{ fromJS }
fromJS(state)

获取get(key,value)
设置set(keu,value) //结合之前的value和当前设置的value返回一个新的state

拆分的state各组件状态要生成immutable对象
state.header.get('test');//获取state中header状态
```
**redux-immutable**
```
总体的state生成immutable对象
{ combineReducers } 'redux-immutable'
combineReducers({header:state})
state.get('header').get('test')
state.getIn(['header','test'])

state.header.test1
state.set('list', test2)
set多个时可以进行链式调用，或者使用merge({key: value,...})
//immutable对象的所有引用都会变成同类型，改变需要进行fromJS转换
immutable数组也提供map方法
```

# 8

**react-router**
- react-router-dom 
> 将router和dom进行结合，能从dom中的相应的事件进行路由的跳转

```
<BrowserRouter>
    <Route path exact render> //exact 对路由进行精准匹配
<BrowserRouter>

<Route path="/detail/:id" exact component={Detail}/> //动态路由
对应跳转页面参数则根据 `props.match.param` 获取

<Redirect> //重定向
```


**PureComponent**
> 在父组件更新时，与父组件状态无关系的子组件也会被更新，PureComponent就封装了shouldComponentUpdate的操作，判断子组件是否需要被更新；

- 最好与immutable库配合使用

# 9

**react-loadable - 异步组件**
> 防止首次加载js文件过大，将打包的js文件拆开，按需加载对应的各个组件的js文件

```
import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'), //异步加载组件
  loading: () => (
    <div>Loading...</div>
  ), //
});

export default () => <LoadableComponent/>
```

- withRouter ：route路由对应的组件为异步组件了，异步子组件无法获取route信息，则需要用withRouter进行包裹组件
