import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    static defaultProps = {

    }

    constructor(props){
        super(props);
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(){
        let {_handleItemDelete, index} = this.props;
        _handleItemDelete(index)
    }

    render(){
        console.log('son')
        const {index, value, a} = this.props;
        return(
            <li
                onClick={this._handleClick}
                dangerouslySetInnerHTML={{__html: value}}>
            </li>
        )
    }
}

TodoItem.propTypes = {
    a : PropTypes.string.isRequired,
    value : PropTypes.oneOfType(PropTypes.string,PropTypes.number),
    _handleItemDelete : PropTypes.func,
    index : PropTypes.number
};

TodoItem.defaultProps = {
    a : 'hahaha',
    value : ''
};

export default TodoItem;