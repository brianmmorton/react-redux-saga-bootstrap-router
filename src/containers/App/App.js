import React, { Component } from 'react';
import logo from 'logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import { Spinner } from 'components';

export default class App extends Component {

  componentWillMount () {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;

    if (user.loading) {
      return (
        <div className="App">
          <Spinner />
        </div>
      )
    }

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            {!!user.data && <Link to='/profile'>Profile</Link>}
            {!!user.data && <Link to='/todos'>Todos</Link>}
          </header>
          {this.props.routes}
        </div>
      </Router>
    );
  }
}
