import React, {Component, Fragment} from 'react'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
            list : []
        }
    }


    _handleInput(e){
        let value = e.target.value;
        this.setState({
            value : value
        });
    }

    _handleClick(){
        let {value, list} = this.state;
        this.setState({
            list : [...list, value],
            value: ''
        })

    }

    _handleItemDelete(index, t){
        let {list} = this.state;
        this.setState({
            list: [
                ...list.slice(0,index),
                ...list.slice(index + 1)
            ]
        })
    }

    render(){
        let {list} = this.state;
        return(
            <Fragment>
                <h2>Todolist</h2>
                <input type="text"
                       onInput={this._handleInput.bind(this)}
                       value={this.state.value}/>
                <button onClick={this._handleClick.bind(this)}>click</button>
                <ul>
                    {
                        list.map((e, index)=>{
                            return (
                                <li key={index}
                                onClick={this._handleItemDelete.bind(this,index)}>{e}
                                </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Todolist;