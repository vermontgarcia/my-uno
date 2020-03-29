import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './DiscardPileStyles';
import { connect } from 'react-redux';

const DiscarPile = () => {

  //console.log(this.props)
  return (
    <View style={styles.container} >
      <Image
        style={styles.cardImage}
        source={require('../../assets/zeroblue.png')}
      />
    </View>
  )
}

const mapStateToProps = (state)=>{
  return{
    hand: state.hand
  }
}

export default connect(mapStateToProps)(DiscarPile);
