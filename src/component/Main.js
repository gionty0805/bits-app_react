import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Header from './Header'

class Main extends Component {

constructor(props) {
    super(props);
    this.state = {
        date : new Date().toLocaleTimeString()
    };
    this.state = {
      title: null
    }
}
componentDidMount() {
fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => this.setState({title: data.title}));

this.timer = setInterval(
    () => this.tick(),
    1000
    );
}
componentWillUnmount() {
    clearInterval(this.timerID);
}
tick() {
    this.setState(
        {date : new Date().toLocaleTimeString()}
    )
}

render() {
    return (
    <div className="App">
      <header className="App-header">
          <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
            <Button variant="contained" color="primary">
            <div>{ this.state.date}</div>
            </Button>
        </div>
      </header>
    </div>
    );
  } 
}

export default Main;