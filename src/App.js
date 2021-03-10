import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './component/Main'
import Login from './component/Login'
import Join from './component/Join'
class App extends React.Component{
  render() {
    return(
      <div>
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
        </Router>
      </div>
    )
  }
}

export default App;