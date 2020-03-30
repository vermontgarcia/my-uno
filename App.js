import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk'
import Table from './src/components/Table';

export default function App(){
  
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <Table />
    </Provider>
  );
}