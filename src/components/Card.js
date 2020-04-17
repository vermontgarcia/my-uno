import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from './CardStyles';
import { connect } from 'react-redux';
import { playCard } from '../actions';

class Card extends Component {

  handlePlayCard = () => {
    const { index, hand, userId, discardPile, playCard } = this.props
    playCard(hand, userId, index, discardPile);
  }

  render(){
    return (
      <View>
        <TouchableHighlight
          onPress={this.handlePlayCard}
        >
          <Image
            style={styles.cardImage}
            source={this.props.card.source}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    hand: state.game.hand,
    discardPile: state.game.discardPile,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { playCard })(Card);
