import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction, getInitListAction } from './store/createAction'
import TodolistUI from './TodolistUI'

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
      <TodolistUI
        handleChange={this._handleChange}
        handleClick={this._handleClick}
        handleItemDelete={this._handleItemDelete}
        value={this.state.value}
        list={this.state.list}
      >
      </TodolistUI>
    )
  }

  componentDidMount() {
    axios.get('/api/todolist')
        .then((res)=>{
          const action = getInitListAction(res.data.list);
          store.dispatch(action)
        })
        .catch(()=>{console.log('fail')})
  }
}

export default Todolist;