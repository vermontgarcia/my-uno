import React, { Component } from 'react';
import { View, Modal, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import GameStatus from './GameStatus';
import DrawPile from './DrawPile';
import DiscarPile from './DiscardPile';
import Hand from './Hand';
import { styles } from './TableStyles';
import { authInputChange, login, shoufleDeck, getHand, updateDeck, updateHand, updateDiscardPile, registerName, updateUsers } from '../actions';
import firebase from '../config/firebase';

const room = 'newRoom'
const rootRef = firebase.database().ref().child(`gameRooms/`);
const tableRef = rootRef.child(room);
const playersRef = tableRef.child('users');
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
      
    });

    playersRef.on('value', snapshot => {
      // console.log(snapshot.val())
      snapshot.val() === null ? this.props.updateUsers({}) : this.props.updateUsers(snapshot.val())
    })
    
    deckRef.on('value', snapshot => {
      snapshot.val() === null ? this.props.updateDeck([]) : this.props.updateDeck(snapshot.val())
    });
    
    discardPileRef.on('value', snapshot => {
      snapshot.val() === null ? this.props.updateDiscardPile([]) : this.props.updateDiscardPile(snapshot.val())
    });
  }

  handleInput = (text) => {
    const { authInputChange} = this.props;
    authInputChange({'field': 'name', 'value' : text})
  }

  handleRegisterName = () => {
    const { name, userId, registerName } = this.props;
    //console.log(name, userId )
    registerName(name, userId)
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
        <Modal
          animationType='fade'
          transparent={false}
          visible={this.props.userModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView} >
              <Text >
                Please enter your name!
              </Text>
              <TextInput 
                style={styles.inputStyle}
                type='text'
                onChangeText={this.handleInput}
                placeholder='Name'
                value={this.props.name}
              />
              <TouchableHighlight
                style={styles.setNameButton}
                onPress={this.handleRegisterName}
              >
                <Text style={styles.textStyle} >Join Game</Text>
              </TouchableHighlight>
            </View>
          </View>

        </Modal>
        <GameStatus />
        <View style={styles.container2}>
          <DrawPile />
          <DiscarPile />
        </View>
        <Hand />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    userId: state.auth.userId,
    user: state.auth.user,
    hand: state.game.hand,
    deck: state.game.deck,
    discardPile: state.game.discardPile,
    userModalVisible: state.auth.userModalVisible,
  }
}

const mapDispatchToProps = {
  login,
  shoufleDeck,
  getHand,
  updateDeck,
  updateHand,
  updateDiscardPile,
  authInputChange,
  registerName,
  updateUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
