import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './GameStatusStyles';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import Player from './Player';

class GameStatus extends Component {

  render(){
    const { players } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.playersContainer}>
          {this.props.players.map((player)=> <Player key={player.id} player={player} />)}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.game.players
  }
}

export default connect(mapStateToProps, null)(GameStatus);
