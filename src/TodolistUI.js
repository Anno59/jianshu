import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'

const TodolistUI = (props) => {
  const getTodoItem = () => {
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
            dataSource={props.list}
            bordered
            renderItem={
              (item, index) => (
                <List.Item>
                  <TodoItem
                    index={index}
                    value={item}
                    handleItemDelete={props.handleItemDelete}
                  />
                </List.Item>
              )
            }
          />
        </CSSTransition>
      </TransitionGroup>
    )
  }

    return (
      <Fragment>
        <h2>Todolist</h2>
        <label htmlFor="input">输入内容:</label>
        <Input
          id="input"
          className="input"
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleChange}
          value={props.value}/>
        <Button type="danger" onClick={props.handleClick}>click</Button>
        {
          getTodoItem()
        }
      </Fragment>
    )
}

export default TodolistUI;