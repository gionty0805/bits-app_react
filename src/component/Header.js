import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Header = () => (
    <div className="header">
        <div className="buttons">
          <button><Link to= '/' className="links">Home</Link></button>
          <button><Link to= '/Signpage' className="links">회원가입</Link></button>
          <button><Link to= '/Login' className="links">로그인</Link></button>
        </div>
    </div>
);

export default Header;