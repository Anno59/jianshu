import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'

class App extends Component{
  render(){
    return(
      <div>
        <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <Route path="/" exact render={() => <div>home</div>}/>
            <Route path="/detail" exact render={() => <div>detail</div>}/>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;