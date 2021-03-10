import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Header from './Header'

class Login extends Component {
    _isMounted = false;
constructor(props) {
    super(props);
    this.state = {
        date : new Date().toLocaleTimeString()
    };
    this.state = {
      title: null
    }
    this._isMounted = false;
}
componentDidMount() {
    this._isMounted = true;
    fetch('http://localhost:3001/api/login')
        .then(res => res.json())
        .then(data => {
            if(this._isMounted){
                this.setState({title: data.title});
            }
        });
    this.timer = setInterval(
        () => this.tick(),
        1000
        );
}
componentWillUnmount() {
    clearInterval(this.timerID);    
    this._isMounted = false;
}
tick() {
    if(this._isMounted){
    this.setState(
        {date : new Date().toLocaleTimeString()}
    )
    }
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

export default Login;