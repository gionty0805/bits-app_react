import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
    
const Header = () => (
      <AppBar position="static">
        <Toolbar>
            <Button><Link to= '/' className="links">Home</Link></Button>
            <Button><Link to= '/login' className="links">로그인</Link></Button>
            <Button><Link to= '/join' className="links">회원가입</Link></Button>
        </Toolbar>
      </AppBar>
);

export default Header;