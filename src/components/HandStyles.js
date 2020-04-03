import { StyleSheet } from 'react-native';
import { borderRadius, width, cardHeigth, borderWidth } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    borderColor: 'red',
    borderRadius: borderRadius,
  },
  centeredView: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    width: width,
    backgroundColor: '#222c',
    padding: 10,
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  showHandButton: {
    backgroundColor: '#808080',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  playCardButton: {
    backgroundColor: '#2196f3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: width-30,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    height: cardHeigth,
  },
  cardImage: {
    width: 80,
    height: 120,
    margin: 5,
  }
});