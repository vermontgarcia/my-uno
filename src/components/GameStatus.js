import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './GameStatusStyles';
import { Avatar } from 'react-native-elements';


const GameStatus = ({name}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size = 'medium'
        source={{
          uri:'https://avatars0.githubusercontent.com/u/40477541?s=460&v=4',
        }}
        rounded
      />
    </View>
  )
}

export default GameStatus;
