import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Modal, Alert, ScrollView } from 'react-native';
import { styles } from './HandStyles';
import { connect } from 'react-redux';
import { playCard, getHand } from '../actions';
import Card from './Card';

class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalVisible : false,
    };
  }

  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  renderButton(text, style, onPress){
    return (
      <TouchableHighlight
          style={style}
          onPress={onPress}
        >
          <Text style={styles.textStyle}>{text}</Text>
        </TouchableHighlight>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <Modal
          style={styles.modalVisible}
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalText}>
                <ScrollView
                  horizontal={true}
                  centerContent={true}
                >
                  {this.props.hand.map((card, index)=>
                    <Card key={index}
                      onPressHandler={this.props.playCard.bind(this)}
                      card={card}
                      index={index}
                    />
                    )}
                </ScrollView>
              </View>

              {this.props.hand.length === 0 ?
                this.props.deck.length !== 0 ?  
                  this.renderButton('Get Hand', styles.playCardButton, this.props.getHand )
                  :
                  this.renderButton('Hide Hand', styles.playCardButton, this.toggleModal)
                :
                this.renderButton('Hide Hand', styles.playCardButton, this.toggleModal)
              }
            </View>
          </View>
        </Modal>
        {this.renderButton('Show Hand', styles.showHandButton,this.toggleModal)}
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    hand: state.game.hand,
    deck: state.game.deck
  }
}

export default connect(mapStateToProps, { playCard, getHand } )(Hand);
