import React, {Component, Fragment}  from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === this.props.value) {
      return false
    }
    return true
  }

  _handleClick() {
    let {_handleItemDelete, index} = this.props;
    _handleItemDelete(index)
  }

  render() {
    console.log('render');
    const {value} = this.props;
    return (
      <span
        onClick={this._handleClick}
        dangerouslySetInnerHTML={{__html: value}}>
      </span>
    )
  }
}

TodoItem.propTypes = {
  a: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _handleItemDelete: PropTypes.func,
  index: PropTypes.number
};

TodoItem.defaultProps = {
  a: 'hahaha',
  value: ''
};

export default TodoItem;