import React, {Component} from 'react'
import store from './store'
import { connect } from 'react-redux';

class TodoList extends Component{
  constructor(props) {
    super(props);
  }

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
      dispatch({
        type:'change_input_value',
        inputValue
      })
    },
    handleBtnClick:()=>{
      let {inputValue} = store.getState();
      dispatch({
        type:'click_button',
        inputValue
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

