import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { styles } from './DrawPileStyles';
import { connect } from 'react-redux';
import { drawCard, shoufleDeck, toggleModal } from '../actions';

 

class DrawPile extends Component {

  handleDrawCard = () => {
    const { deck, hand, userId, drawCard, toggleModal } = this.props;
    drawCard(deck, hand, userId);
    toggleModal();
  }

  handleShoufleDeck = () => {
   const { discardPile, shoufleDeck } = this.props;
   shoufleDeck(discardPile);
  }

  render(){
    return (
      <View style={styles.container}>
        {this.props.deck.length === 0 ?
          <TouchableHighlight
            style={styles.playCardButton}
            onPress={this.handleShoufleDeck}
          >
            <Text style={styles.textStyle} >Shoufle Deck</Text>
          </TouchableHighlight>
          :
          <TouchableHighlight
            onPress={this.handleDrawCard}
          >
            <Image
              style={styles.cardImage}
              source={require('../../assets/drawpile.png')}
            />
          </TouchableHighlight>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.game.deck,
    hand: state.game.hand,
    userId: state.auth.userId,
    discardPile: state.game.discardPile,
  }
}

const mapDispatchToProps = {
  drawCard,
  shoufleDeck,
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawPile)
