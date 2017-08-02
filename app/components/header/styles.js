import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:10,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        height: 64,

    },
   outerIcon: {
      padding:10, 
      backgroundColor:'white', 
      height:40
   },

   icon: {
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center'
   }
});
