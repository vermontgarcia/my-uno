import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import GameStatus from './GameStatus';
import DrawPile from './DrawPile';
import DiscarPile from './DiscardPile';
import Hand from './Hand';
import { styles } from './TableStyles';
import { login } from '../actions';

const firebaseConfig = {
  apiKey: "AIzaSyDW2D-NokVGHRe9n3YuaJb-QqizCVz2thk",
  authDomain: "my-uno-b5066.firebaseapp.com",
  databaseURL: "https://my-uno-b5066.firebaseio.com",
  projectId: "my-uno-b5066",
  storageBucket: "my-uno-b5066.appspot.com",
  messagingSenderId: "920954902891",
  appId: "1:920954902891:web:8ed61410136d9b9b4c542e",
  measurementId: "G-97M7BZTK58"
};

class Table extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    this.props.login();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <GameStatus />
        <DrawPile />
        <DiscarPile />
        <Hand />
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(Table);
