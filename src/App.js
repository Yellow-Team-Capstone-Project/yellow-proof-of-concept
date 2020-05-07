import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from '.';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const snap = await db.collection('users').get();
    const users = [];
    snap.forEach((doc) => users.push(doc.data()));
    this.setState({ users });
  }
  render() {
    return (
      <div>
        <div>h...h..hello?</div>
      </div>
    );
  }
}

export default App;
