import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { styles } from './DrawPileStyles';
import { connect } from 'react-redux';
import { drawCard, shoufleDeck } from '../actions';

 

class DrawPile extends Component {

  handleDrawCard = () => {
    const { deck, hand, userId, drawCard } = this.props;
    drawCard(deck, hand, userId);
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

export default connect(mapStateToProps, { drawCard, shoufleDeck } )(DrawPile)
