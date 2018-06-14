import React, { Component } from 'react';
import AddTodo from './containers/addTodo'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import {todos} from './reducers'
let store = createStore(todos)
store.subscribe(()=>{
  console.log(store.getState())
})
class App extends Component {
  render() {
    return (
     <Provider store={store}>
     <AddTodo></AddTodo>
     </Provider>
    )
  }
}

export default App;
