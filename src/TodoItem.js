import React, { Component }  from 'react'

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
        const {index, value} = this.props;
        return(
            <li
                key={index}
                onClick={this._handleClick}
                dangerouslySetInnerHTML={{__html: value}}>
            </li>
        )
    }
}

export default TodoItem;