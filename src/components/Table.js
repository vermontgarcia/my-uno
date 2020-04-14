import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import GameStatus from './GameStatus';
import DrawPile from './DrawPile';
import DiscarPile from './DiscardPile';
import Hand from './Hand';
import { styles } from './TableStyles';
import { login, shoufleDeck, getHand, updateDeck, updateHand, updateDiscardPile } from '../actions';
import firebase from 'firebase';

class Table extends Component {

  componentDidMount() {
    console.log('DidMount')
    //this.props.login();

    // const room = 'myRoom'
    // const rootRef = firebase.database().ref().child(`gameRooms/${room}`);

    // const deckRef = rootRef.child('-M48FmYxmRBD6GEKQoVG/newDeck');
    // deckRef.on('value', snapshot => {
    //   updateDeck(snapshot.val())
    // });
    // const handRef = rootRef.child('-M48FmYxmRBD6GEKQoVG/newHand');
    // handRef.on('value', snapshot => {
    //   updateHand(snapshot.val())
    // });
    // const discardPileRef = rootRef.child('-M48FmYxmRBD6GEKQoVG/newDiscardPile');
    // discardPileRef.on('value', snapshot => {
    //   updateDiscardPile(snapshot.val())
    // });
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

export default connect(mapStateToProps, { login, shoufleDeck, getHand })(Table);
