import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './DiscardPileStyles';
import { connect } from 'react-redux';
import { startGame } from '../actions';

class DiscarPile extends Component{

  handleStartGame = () => {
    const { deck, discardPile, startGame } = this.props;
    startGame(deck, discardPile);
  }

  render(){
    const { discardPile, deck } = this.props
    return (
      <View style={styles.container} >
        {(discardPile.length === 0)?
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
          <Image
            style={styles.cardImage}
            source={discardPile[discardPile.length-1].source}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    discardPile: state.game.discardPile,
    deck: state.game.deck,
  }
}

export default connect(mapStateToProps, { startGame })(DiscarPile);
