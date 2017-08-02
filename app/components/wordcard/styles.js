import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import GLOBAL from '../../../app/GLOBAL'

export default StyleSheet.create({
   container: {
      width: width - 40,
      margin: 20,
      padding: 10,
      shadowColor: "#000000",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: {
         height: 0,
         width: 0
      },
      borderRadius: 4,
      alignItems: 'stretch',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#ffffff',
      overflow: 'visible'
   },
   topDesription: {
      fontSize: 10,
      fontWeight: '900',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'right',
      color: '#3498db',
      paddingBottom: 10,
      opacity: 0

   },
   title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'left',
      color: '#3498db',
      paddingBottom: 20,
   },
   definition: {
      fontSize: 19,
      fontWeight: '400',
      textAlign: 'left',
      color: '#4A4A4A',
      paddingBottom: 20,
   },
   example: {
      fontSize: 14,
      fontStyle: 'italic',
      fontWeight: '100',
      textAlign: 'left',
      color: GLOBAL.primaryDark,
      paddingBottom: 20,
      paddingLeft:10,
   },
   author: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'left',
      color: '#bdc3c7',
      paddingBottom: 20,
   },
   separator: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'left',
      color: '#bdc3c7',
      paddingBottom: 20,
   },
   date: {
      fontSize: 14,
      fontWeight: '300',
      textAlign: 'left',
      color: '#bdc3c7',
      paddingBottom: 20,
   },
   footer: {
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      marginBottom:10,
   },
   buttonGroup: {
      // backgroundColor:'black',
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   thumbsUp: {
      width: 80,
      height: 40,
      backgroundColor: '#F4F4F4'
   },
   thumbsDown: {
      height: 40,
      backgroundColor: '#F4F4F4'
   },
   actionButton: {
      // backgroundColor:'#F4F4F4',
      // padding:5,
      // width:50,
   },
   buttonText: {
      paddingHorizontal: 10,
      fontSize: 14,
      fontWeight: '300',
   },
   outerIcon: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',
      height: 40
   },
   iconView: {
      margin:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   }

});