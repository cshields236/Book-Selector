import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import './App.css';
import RandomBook from '../src/containers/RandomBook/RandomBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
         <RandomBook />
        </Layout>
      </div>
    );
  }
}

export default App;
