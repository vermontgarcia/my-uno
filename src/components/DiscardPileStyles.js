import { StyleSheet } from 'react-native';
import { borderRadius, width, borderWidth, tableHeight } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.45,
    height: tableHeight * 0.3,
    borderStyle: "solid",
    borderWidth: borderWidth,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
  },
  cardImage: {
    width: 80,
    height: 120,
    transform: [{
      rotate: '40deg'
    }],
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
  // rotateImage:{
  //   height: 250,
  //   width:250,
  //   transform: [{ rotate: '40deg' }], /* change the deg (degree of rotation) between 0deg, 360deg*/
  // },
});