import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './DiscardPileStyles';
import { connect } from 'react-redux';
import { startGame } from '../actions';

class DiscarPile extends Component{

  render(){
    return (
      <View style={styles.container} >
        {this.props.discardPile.length === 0 ?
          <TouchableHighlight
            style={styles.playCardButton}
            onPress={this.props.startGame}
          >
            <Text style={styles.textStyle} >Start Game</Text>
          </TouchableHighlight>
          :
          <Image
            style={styles.cardImage}
            source={this.props.discardPile[0].source}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    discardPile: state.deck.discardPile
  }
}

export default connect(mapStateToProps, { startGame })(DiscarPile);
