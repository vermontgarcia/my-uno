import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './PlayerStyles';
import { Avatar } from 'react-native-elements';

const renderCard = () => {
  return (
    <Image
        style={styles.cardImage}
        source={require('../../assets/drawpile.png')}
      />
  )
}

const Player = ({player}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size = 'small'
        source={{
          uri:'https://avatars0.githubusercontent.com/u/40477541?s=460&v=4',
        }}
        rounded
      />
      <Text>{player.name}</Text>
      {player.hand ? renderCard() : null}
    </View>
  )
}

export default Player;
