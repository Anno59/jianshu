import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login';
import Write from './pages/write';


class App extends Component{
  render(){
    // console.log(process.env.PUBLIC_URL);
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter basename="/jianshu/">
            <Header/>
            <Route path="/write" exact component={Write}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id" exact component={Detail}/>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;