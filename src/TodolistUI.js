import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'

class TodolistUI extends Component{
  constructor(){
    super();
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
        >
          <List
            dataSource={this.props.list}
            bordered
            renderItem={
              (item, index) => (
                <List.Item>
                  <TodoItem
                    index={index}
                    value={item}
                    handleItemDelete={this.props.handleItemDelete}
                  />
                </List.Item>
              )
            }
          />
        </CSSTransition>
      </TransitionGroup>
    )
  }

  render(){
      return (
        <Fragment>
          <h2>Todolist</h2>
          <label htmlFor="input">输入内容:</label>
          <Input
            id="input"
            className="input"
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleChange}
            value={this.props.value}/>
          <Button type="danger" onClick={this.props.handleClick}>click</Button>
          {
            this.getTodoItem()
          }
        </Fragment>

      )
    }
}

export default TodolistUI;