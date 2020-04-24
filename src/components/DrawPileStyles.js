import { StyleSheet } from 'react-native';
import { borderRadius, width, borderWidth, tableHeight } from './Dimensions';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.45,
    height: tableHeight * 0.3,
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
    zIndex: 100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
