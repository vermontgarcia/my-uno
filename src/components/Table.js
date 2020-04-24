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

const room = 'newRoom'
const rootRef = firebase.database().ref().child(`gameRooms/`);
const tableRef = rootRef.child(room);
let handRef;
const deckRef = tableRef.child('deck');
const discardPileRef = tableRef.child('discardPile');

class Table extends Component {
  
  componentDidMount(){

    firebase.auth()
    .signInAnonymously()
    .then(user=>{

      const handUserRef = tableRef.child('users').child(user.user.uid);
      handRef = handUserRef.child(`hand`);
      
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

  componentWillUnmount(){
    deckRef.off();
    handRef.off();
    discardPileRef.off();
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return (
      <View style={styles.container}>
        <GameStatus name={this.props.name} />
        <View style={styles.container2}>
          <DrawPile />
          <DiscarPile />
        </View>
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

const mapDispatchToProps = {
  login,
  shoufleDeck,
  getHand,
  updateDeck,
  updateHand,
  updateDiscardPile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
