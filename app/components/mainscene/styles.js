import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
   },
   header: {
      marginHorizontal: 10,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
   },
   logo: {
      width: 200,
      height:100,
      alignItems: 'center'
   },
   logoContainer: {
      alignItems: 'center',
      marginTop: 100,
   },
   feelingLucky: {
      padding: 10,
      margin: 20,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.04)',
      height: 50,
      borderRadius: 4,
      marginTop: 44,
   },
   buttonTitle: {
      fontSize: 21,
      fontWeight: '200',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'center',
      color: 'rgba(149, 165, 166,1.0)',
   },
   latestTitle: {
      fontSize: 21,
      fontWeight: '300',
      textAlign: 'center',
      color: '#34495E',
      marginTop: 50,
      marginBottom: 20
   },
   latestRowItems: {
      fontSize: 21,
      fontWeight: '300',
      textAlign: 'center',
      color: '#3498db',
      margin: 10,

   },
   outerIcon: {
      padding: 10,
      backgroundColor: 'white',
      height: 40
   },
   iconView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   }
});
