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
  }
});
