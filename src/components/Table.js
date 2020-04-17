import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import GameStatus from './GameStatus';
import DrawPile from './DrawPile';
import DiscarPile from './DiscardPile';
import Hand from './Hand';
import { styles } from './TableStyles';
import { login, shoufleDeck, getHand, updateDeck, updateHand, updateDiscardPile } from '../actions';
import firebase from '../config/firebase';

const room = 'myRoom'
const rootRef = firebase.database().ref().child(`gameRooms/`);
const tableRef = rootRef.child(room);

const deckRef = tableRef.child('deck');
const discardPileRef = tableRef.child('discardPile');

class Table extends Component {
  
  componentDidMount() {

    firebase.auth()
    .signInAnonymously()
    .then(user=>{

      const handUserRef = tableRef.child(user.user.uid);
      const handRef = handUserRef.child(`hand`);
      
      handRef.on('value', snapshot => {
        snapshot.val() === null ? this.props.updateHand([], this.props.userId) : this.props.updateHand(snapshot.val())
      });
      this.props.login(user);
    })
    .catch(error => {
    }
  );
    
    deckRef.on('value', snapshot => {
      snapshot.val() === null ? this.props.updateDeck([]) : this.props.updateDeck(snapshot.val())
    });
    
    discardPileRef.on('value', snapshot => {
      snapshot.val() === null ? this.props.updateDiscardPile([]) : this.props.updateDiscardPile(snapshot.val())
    });
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
    hand: state.game.hand,
    deck: state.game.deck,
    discardPile: state.game.discardPile,
  }
}

export default connect(mapStateToProps, { login, shoufleDeck, getHand, updateDeck, updateHand, updateDiscardPile })(Table);
