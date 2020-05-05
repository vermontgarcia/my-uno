import { StyleSheet } from 'react-native';
import { tableWidth, tableHeight, width, height, borderWidth, borderRadius } from './Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen',
    padding: 10,
    width: tableWidth,
    height: tableHeight,
    //////////
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
  },
  container2: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
    /////////////
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: borderWidth,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ////////////
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
  },
  modalView: {
    margin: 20,
    height: tableHeight * 0.90,
    width: tableWidth * 0.85,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: 'space-evenly',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    ///////////
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
  },
  inputStyle: {
    width: tableWidth * 0.6,
    height: 40,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
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
    width: width - 30,
    height: height * .5,
    //////////
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: borderWidth,
  },
  setNameButton: {
    backgroundColor: '#2196f3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});