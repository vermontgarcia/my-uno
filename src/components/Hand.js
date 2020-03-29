import React, {useState} from 'react';
import { Text, View, TouchableHighlight, Modal, Alert, Image, ScrollView } from 'react-native';
import { styles } from './HandStyles';
import { connect } from 'react-redux';
import { playCard } from '../actions';

const Hand = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hand, setHand] = useState([require('../../assets/zeroblue.png')])
  return (
    <View style={styles.container}>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        
        onDismiss={()=>{
          Alert.alert('Card has been played')
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>
              <ScrollView
                horizontal={true}
                centerContent={true}
              >
                {hand.map((card, index)=>
                  <View key={index}>
                    <TouchableHighlight
                      onPress={()=>{

                        console.log('Play Card')
                        

                        //let currentHand = this.props.hand;
                        //currentHand.splice(index, 1);
                        //setHand(currentHand);
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image
                        style={styles.cardImage}
                        source={card}
                      />
                    </TouchableHighlight>
                  </View>
                  )}
              </ScrollView>

            </View>

            <TouchableHighlight
              style={styles.playCardButton}
              onPress={()=>{
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Hide Hand</Text>
            </TouchableHighlight>
          </View>
        </View>

      </Modal>

      <TouchableHighlight
        style={styles.showHandButton}
        onPress={()=>{
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Hand</Text>
      </TouchableHighlight>
      
    </View>
  )
}

const mapStateToProps = (state) => {
  return{
    hand: state.hand,
    deck: state.deck
  }
}

export default connect(mapStateToProps, { playCard } )(Hand);
