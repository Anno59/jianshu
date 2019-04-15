import React, {Component} from 'react'
import store from './store'
import { connect } from 'react-redux';

class TodoList extends Component{
  constructor(props){
    super(props);
    // this.state = store.getState();
    // this._handleInputChange = this._handleInputChange.bind(this);
    // this._handleBtnClick = this._handleBtnClick.bind(this);
    // this._updateState = this._updateState.bind(this);
    // store.subscribe(this._updateState)
  }

  // _updateState(){
  //   this.setState(store.getState())
  // }
  //
  // _handleInputChange(e){
  //   let inputValue = e.target.value;
  //   store.dispatch({
  //     type:'change_input_value',
  //     inputValue
  //   })
  // }
  //
  // _handleBtnClick(){
  //   let {inputValue} = store.getState();
  //   store.dispatch({
  //     type:'click_button',
  //     inputValue
  //   })
  // }

  render(){
    return (
      <div>
        <div>
          <input type="text" onChange={this.props.handleInputChange} value={this.props.inputValue}/>
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((e, index) => {
              return (
                <li key={index}>{e}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list:state.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange:(e)=>{
      let inputValue = e.target.value;
      // store.dispatch({
      //   type:'change_input_value',
      //   inputValue
      // })
      dispatch({
        type:'change_input_value',
        inputValue
      })
    },
    handleBtnClick:()=>{
      let {inputValue} = store.getState();
      // store.dispatch({
      //   type:'click_button',
      //   inputValue
      // })
      dispatch({
        type:'click_button',
        inputValue
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

