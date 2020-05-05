import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './DiscardPileStyles';
import { connect } from 'react-redux';
import { startGame, returnCard, toggleModal } from '../actions';

class DiscarPile extends Component {

  handleStartGame = () => {
    const { deck, discardPile, startGame } = this.props;
    startGame(deck, discardPile);
  }

  handleReturnCard = () => {
    const { discardPile, hand, userId, returnCard, toggleModal } = this.props;
    returnCard(discardPile, hand, userId);
    toggleModal();
  }

  render() {
    const { discardPile, deck } = this.props
    return (
      <View style={styles.container} >
        {(discardPile.length === 0) ?
          deck.length !== 0 ?
            <TouchableHighlight
              style={styles.playCardButton}
              onPress={this.handleStartGame}
            >
              <Text style={styles.textStyle} >Start Game</Text>
            </TouchableHighlight>
            :
            <></>
          :
          <TouchableHighlight
            onPress={this.handleReturnCard}
          >
            <Image
              style={styles.cardImage}
              source={discardPile[discardPile.length - 1].source}
            />
          </TouchableHighlight>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    discardPile: state.game.discardPile,
    deck: state.game.deck,
    hand: state.game.hand,
    userId: state.auth.userId,
  }
}

const mapDispatchToProps = {
  startGame,
  returnCard,
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscarPile);
