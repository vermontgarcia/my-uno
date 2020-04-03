import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from './CardStyles';

const Card = ({ onPressHandler, card }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPressHandler}
      >
        <Image
          style={styles.cardImage}
          source={card.source}
        />
      </TouchableHighlight>
    </View>
  )
}

export default Card;
