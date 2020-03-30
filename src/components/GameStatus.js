import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './GameStatusStyles';

const GameStatus = ({name}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

export default GameStatus;
