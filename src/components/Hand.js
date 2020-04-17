import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Modal, Alert, ScrollView } from 'react-native';
import { styles } from './HandStyles';
import { connect } from 'react-redux';
import { playCard, getHand, drawCard, updateHand } from '../actions';
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

  handleGetHand = () => {
    const { deck, hand, userId, getHand } = this.props;
    getHand(deck, hand, userId);
  }

  handleDrawCard = () => {
    const { deck, hand, userId, drawCard } = this.props;
    drawCard(deck, hand, userId);

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
              <Text style={styles.textStyle} >{this.props.hand.length}</Text>
              <View style={styles.modalText}>
                <ScrollView
                  horizontal={true}
                  centerContent={true}
                >
                  {this.props.hand.map((card, index)=>
                    <Card
                      key={index}
                      card={card}
                      index={index}
                    />
                    )}
                </ScrollView>
              </View>

              {this.props.hand.length === 0 ?
                this.props.deck.length !== 0 ? 
                  <View style={styles.buttonsWraper}>
                    {this.renderButton('Get Hand', styles.playCardButton, this.handleGetHand)}
                    {this.renderButton('Draw Card', styles.playCardButton, this.handleDrawCard)}
                    {this.renderButton('Hide Hand', styles.playCardButton, this.toggleModal)}
                  </View> 
                  :
                  this.renderButton('Hide Hand', styles.playCardButton, this.toggleModal)
                :
                <View style={styles.buttonsWraper}>
                  {this.renderButton('Draw Card', styles.playCardButton, this.handleDrawCard)}
                  {this.renderButton('Hide Hand', styles.playCardButton, this.toggleModal)}
                </View>
              }
            </View>
          </View>
        </Modal>
        {this.renderButton('Show Hand', styles.showHandButton, this.toggleModal)}
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    hand: state.game.hand,
    deck: state.game.deck,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { playCard, getHand, drawCard, updateHand } )(Hand);
