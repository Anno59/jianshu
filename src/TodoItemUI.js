import React, { Component } from 'react';

class TodoItemUI extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <span
        onClick={()=>this.props.handleClick()}
        dangerouslySetInnerHTML={{__html: this.props.value}}>
      </span>
    )
  }
}

export default TodoItemUI;