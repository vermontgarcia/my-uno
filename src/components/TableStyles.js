import { StyleSheet } from 'react-native';
import { tableWidth, tableHeight } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen' ,
    padding: 10,
    width: tableWidth,
    height: tableHeight,
  }
});