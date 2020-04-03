import { StyleSheet } from 'react-native';
import { borderRadius, width, borderWidth } from './Dimensions';


export const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    borderColor: 'red',
    borderRadius: borderRadius,
  },
  cardImage: {
    width: 80,
    height: 120,
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
});
