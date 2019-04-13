import React, {Component, Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
            list : []
        }
        this._handleInput = this._handleInput.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleItemDelete = this._handleItemDelete.bind(this);
    }

    getTodoItem(){
        return (
            this.state.list.map((e, index)=>{
                return (
                    <TodoItem
                         key={index}
                         index={index}
                         value={e}
                         _handleItemDelete={this._handleItemDelete}
                    />
                )
            })
        )
    }

    _handleInput(e){
        let value = e.target.value;
        this.setState(() => ({
            value : value
        }));
    }

    _handleClick(){
        this.setState((prevState) => ({
            list : [...prevState.list, prevState.value],
            value: ''
        }))

    }

    _handleItemDelete(index){
        this.setState((prevState) => {
            let {list} = prevState;
            list = [
                ...list.slice(0,index),
                ...list.slice(index + 1)
            ];
            return {list}
        })
    }

    render(){
        return(
            <Fragment>
                {/*下面是一个组件*/}
                <h2>Todolist</h2>
                <label htmlFor="input">输入内容:</label>
                <input
                    id="input"
                    className="input"
                    // ref={(input)=>{this.input = input}}
                    onChange={this._handleInput}
                    value={this.state.value}/>
                <button onClick={this._handleClick}>click</button>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('/api/todolist')
            .then((res)=>{
                this.setState(()=>{
                    return {
                        list: [...res.data]
                    }
                })
            })
            .catch(()=>{console.log('fail')})
    }
}

export default Todolist;