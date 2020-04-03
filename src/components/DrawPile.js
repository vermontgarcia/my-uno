import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { styles } from './DrawPileStyles';
import { connect } from 'react-redux';
import { drawCard, shoufleDeck } from '../actions';


class DrawPile extends Component {
  render(){
    return (
      <View style={styles.container}>
        {this.props.deck.length === 0 ?
          <TouchableHighlight
            style={styles.playCardButton}
            onPress={this.props.shoufleDeck}
          >
            <Text style={styles.textStyle} >Shoufle Deck</Text>
          </TouchableHighlight>
          :
          <TouchableHighlight
            onPress={this.props.drawCard}
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
    deck: state.deck.deck,
    hand: state.deck.hand
  }
}

export default connect(mapStateToProps, { drawCard, shoufleDeck } )(DrawPile)
