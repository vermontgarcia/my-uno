import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import GameStatus from './GameStatus';
import DrawPile from './DrawPile';
import DiscarPile from './DiscardPile';
import Hand from './Hand';
import { styles } from './TableStyles';
import { login, shoufleDeck, getHand } from '../actions';
import { firebaseConfig } from '../config/appConfig';
import { deck } from '../config/deck';

class Table extends Component {

  componentDidMount() {


    firebase.initializeApp(firebaseConfig);
    this.props.login();
    this.props.shoufleDeck(deck);
    this.props.getHand(this.props.deck);
  }

  render() {
    return (
      <View style={styles.container}>
        <GameStatus name={this.props.name} />
        <DrawPile />
        <DiscarPile />
        <Hand hand={this.props.hand} />
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    name: state.auth.name,
    userId: state.auth.userId,
    user: state.auth.user,
    hand: state.hand,
    deck: state.deck,
  }
}

export default connect(mapStateToProps, { login, shoufleDeck, getHand })(Table);
