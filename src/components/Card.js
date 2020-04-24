import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from './CardStyles';
import { connect } from 'react-redux';
import { playCard, toggleModal } from '../actions';

class Card extends Component {

  handlePlayCard = () => {
    const { index, hand, userId, discardPile, playCard, toggleModal } = this.props
    playCard(hand, userId, index, discardPile);
    toggleModal();
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

const mapDispatchToProps = {
  playCard,
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
