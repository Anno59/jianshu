import React, {Component, Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'


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
            <TransitionGroup>
            {
                <List
                    dataSource={this.state.list}
                    bordered
                    renderItem={
                        item => (<List.Item>
                            <CSSTransition
                                // key={index}
                                timeout={800}
                                classNames="fade"
                                // onEntered={(el)=>{el.style.color='red'}}
                            >
                                <TodoItem
                                    // index={index}
                                    value={item}
                                    _handleItemDelete={this._handleItemDelete}
                                />
                            </CSSTransition>

                        </List.Item>)
                    }
                />

                // this.state.list.map((e, index)=>{
                //     return (
                //         <CSSTransition
                //             key={index}
                //             timeout={800}
                //             classNames="fade"
                //             // onEntered={(el)=>{el.style.color='red'}}
                //         >
                //             <TodoItem
                //                 index={index}
                //                 value={e}
                //                 _handleItemDelete={this._handleItemDelete}
                //             />
                //         </CSSTransition>
                //     )
                // })
            }
            </TransitionGroup>
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
                <Input
                    id="input"
                    className="input"
                    style={{width:'300px',marginRight:'10px'}}
                    // ref={(input)=>{this.input = input}}
                    onChange={this._handleInput}
                    value={this.state.value}/>
                <Button type="danger" onClick={this._handleClick}>click</Button>
                {
                    this.getTodoItem()
                }
            </Fragment>
        )
    }

    componentDidMount(){
        // axios.get('/api/todolist')
        //     .then((res)=>{
        //         this.setState(()=>{
        //             return {
        //                 list: [...res.data]
        //             }
        //         })
        //     })
        //     .catch(()=>{console.log('fail')})
    }
}

export default Todolist;