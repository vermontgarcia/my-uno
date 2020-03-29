import React from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import { styles } from './DrawPileStyles';
import { connect } from 'react-redux';
import { drawCard } from '../actions';


const DrawPile = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={()=> console.log('Draw Card')}
      >
        <Image
          style={styles.cardImage}
          source={require('../../assets/drawpile.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    hand: state.hand
  }
}

export default connect(mapStateToProps, { drawCard } )(DrawPile)
