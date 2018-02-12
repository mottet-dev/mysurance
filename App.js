import React, { Component } from 'react';
import { View } from 'react-native';
import MainRouter from './src/MainRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}

export default App;