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
                    <Card key={index} onPressHandler={this.props.playCard.bind(this)} card={card} index={index}/>
                    )}
                </ScrollView>
              </View>

              {this.props.hand.length === 0 ?
                <TouchableHighlight
                  style={styles.playCardButton}
                  onPress={this.props.getHand}
                >
                  <Text style={styles.textStyle} >Get Hand</Text>
                </TouchableHighlight>
                :
                <TouchableHighlight
                  style={styles.playCardButton}
                  onPress={()=>{
                    this.setState({modalVisible: !this.state.modalVisible})
                  }}
                >
                  <Text style={styles.textStyle}>Hide Hand</Text>
                </TouchableHighlight>
              }
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.showHandButton}
          onPress={()=>{
            this.setState({modalVisible: true});
          }}
        >
          <Text style={styles.textStyle}>Show Hand</Text>
        </TouchableHighlight>
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
