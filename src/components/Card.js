import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from './CardStyles';

const Card = ({onPressHandler, card, index}) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPressHandler}
      >
        <Image
          style={styles.cardImage}
          source={card}
        />
      </TouchableHighlight>
    </View>
  )
}

export default Card
