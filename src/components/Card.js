import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from './CardStyles';
import { connect } from 'react-redux';
import { playCard } from '../actions';

class Card extends Component {


  playCard(){
    const { index } = this.props
    this.props.playCard(index);
  }

  render(){
    return (
      <View>
        <TouchableHighlight
          onPress={this.playCard.bind(this)}
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

export default connect(null, { playCard })(Card);
