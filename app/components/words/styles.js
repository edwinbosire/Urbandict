import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
      alignItems: 'stretch',
      width: width
   },
   listContainer: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      overflow: 'visible'
   },
   header: {
      backgroundColor: 'white',
      marginTop: 0,
      paddingTop: 10,
      paddingBottom:10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      borderBottomColor: 'rgba(151,151,151,0.16)',
      borderBottomWidth: 1
   },
   title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'center',
      color: '#3498db',
      marginTop: 5
   },
   card: {
      alignItems: 'center',
      justifyContent: 'center',

   },
   closeButton: {
      marginTop: -60,
      padding: 10,
      margin: 20,
      alignItems: 'flex-end',
      backgroundColor: 'transparent',
      height: 50,
      borderRadius: 4,
      marginTop: 44,
   },
   navButton: {
      padding: 10,
      backgroundColor: 'white',
      height: 40
   },

});