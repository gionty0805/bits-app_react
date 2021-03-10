import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './component/Main'
class App extends React.Component{
  
        
  render() {
    return(
      <div>
        <Router>
          <Route path="/" exact component={Main} />
          {/* <Route path="/about" component={About} />
          <Route path="/memo" component={Memo} /> */}
        </Router>
      </div>
    )
  }
}

export default App;