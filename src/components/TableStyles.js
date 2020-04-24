import { StyleSheet } from 'react-native';
import { tableWidth, tableHeight, width, borderWidth, borderRadius } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen' ,
    padding: 10,
    width: tableWidth,
    height: tableHeight,
  },
  container2: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: borderWidth,
    borderColor: 'red',
    borderRadius: borderRadius,
  },
});