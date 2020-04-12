import React, { Component } from 'react'

import './App.css';
import Buttons from './components/Buttons'
import Count from './components/Count'


export class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Counter App</h1>
        <Count />
        <Buttons />
        
      </div>
    )
  }
}

export default App
