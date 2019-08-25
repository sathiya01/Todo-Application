import Input from './Input';
import React, { Component } from 'react';
import store from './Store'

 class App extends Component {
  render() {
    return (
      <div>
           <Input store={store}/>
      </div>
    )
  }
}

export default App
