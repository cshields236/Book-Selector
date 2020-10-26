import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import './App.css';

import Shelf from '../src/containers/Shelf/Shelf'
import { Route } from 'react-router-dom'

require('dotenv').config()


class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Shelf />

        </Layout>
      </div>
    );
  }
}

export default App;
