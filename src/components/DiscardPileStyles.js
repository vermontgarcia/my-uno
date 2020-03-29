import { StyleSheet } from 'react-native';
import { borderRadius, width, borderWidth } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: width,
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
  }
});