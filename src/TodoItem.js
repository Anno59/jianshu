import React, {Component, Fragment}  from 'react'
import PropTypes from 'prop-types'
import TodoItemUI from './TodoItemUI'

class TodoItem extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.value === this.props.value) {
      return false
    }
    return true
  }

  render() {
    return (
      <TodoItemUI
        handleClick={()=>this.props.handleItemDelete(this.props.index)}
        value={this.props.value}
      />
    )
  }
}

TodoItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number
};

TodoItem.defaultProps = {
  value: ''
};

export default TodoItem;