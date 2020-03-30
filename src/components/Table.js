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
import { firebaseConfig } from '../config/appConfig';

class Table extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    this.props.login();
  }

  render() {
    
    return (
      <View style={styles.container}>
        <GameStatus name={this.props.name} />
        <DrawPile />
        <DiscarPile />
        <Hand />
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    name: state.auth.name,
    userId: state.auth.userId,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, { login })(Table);
