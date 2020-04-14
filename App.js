import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk'
import Table from './src/components/Table';
import firebase from 'firebase'
import { firebaseConfig } from './src/config/appConfig'; 

export default function App(){

  console.log('Initializon APP')
  
  firebase.initializeApp(firebaseConfig);
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <Table />
    </Provider>
  );
}