import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducers from "./src/reducers"

import Table from './src/components/table'

import ReduxThunk from 'redux-thunk'

export default function App() {
  return (
    <Provider store={createStore(reducers, { }, applyMiddleware(ReduxThunk))}>
      <StatusBar hidden={true} />
      <Table />
    </Provider>
  );
}


