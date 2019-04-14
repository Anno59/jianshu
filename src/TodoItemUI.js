import React from 'react';

const TodoItemUI = (props) => {
  return (
    <span
      onClick={()=>props.handleClick()}
      dangerouslySetInnerHTML={{__html: props.value}}>
    </span>
  )
}

export default TodoItemUI;