import { StyleSheet } from 'react-native';
import { borderRadius, width, borderWidth } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    borderColor: 'red',
    borderRadius: borderRadius,
  },
  cardImage: {
    width: 80 * 0.3,
    height: 120 * 0.3,
  },
});