import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction } from './store/createAction'

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this._handleChange = this._handleChange.bind(this);
    this._handleStateChange = this._handleStateChange.bind(this);
    store.subscribe(this._handleStateChange);
    this._handleClick = this._handleClick.bind(this);
    this._handleItemDelete = this._handleItemDelete.bind(this);
  }

  getTodoItem() {
    return (
      <TransitionGroup>
        <CSSTransition
          // key={index}
          timeout={800}
          classNames="fade"
          onExited={() => {
          }}
          // onEntered={(el)=>{el.style.color='red'}}
        >
          <List
            dataSource={this.state.list}
            bordered
            renderItem={
              (item, index) => (
                <List.Item>
                  <TodoItem
                    index={index}
                    value={item}
                    _handleItemDelete={this._handleItemDelete}
                  />
                </List.Item>
              )
            }
          />
        </CSSTransition>
      </TransitionGroup>
    )
  }

  _handleStateChange(){
    this.setState(store.getState())
  }

  _handleChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  _handleClick() {
    const action = getBtnClickAction();
    store.dispatch(action);
  }

  _handleItemDelete(value) {
    const action = getItemDeleteAction(value);
    store.dispatch(action)
  }

  render() {
    return (
      <Fragment>
        {/*下面是一个组件*/}
        <h2>Todolist</h2>
        <label htmlFor="input">输入内容:</label>
        <Input
          id="input"
          className="input"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this._handleChange}
          value={this.state.value}/>
        <Button type="danger" onClick={this._handleClick}>click</Button>
        {
          this.getTodoItem()
        }
      </Fragment>
    )
  }

  // componentDidMount() {
    // axios.get('/api/todolist')
    //     .then((res)=>{
    //         this.setState(()=>{
    //             return {
    //                 list: [...res.data]
    //             }
    //         })
    //     })
    //     .catch(()=>{console.log('fail')})
  // }
}

export default Todolist;