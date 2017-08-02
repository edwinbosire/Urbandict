import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'rgba(52, 152, 219,0.850)',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
    },
    menuButton:{
        padding:10, 
        alignItems:'center', 
        backgroundColor:'rgba(0,0,0,0.0)', 
        height:50,
        borderRadius:4,
    },
    secondaryMenuButton:{
        padding:10, 
        alignItems:'center', 
        backgroundColor:'rgba(0,0,0,0.0)', 
        height:50,
        borderRadius:4,
    },
    closeButton:{
        padding:10, 
        margin:20,
        alignItems:'flex-end', 
        backgroundColor:'transparent', 
        height:50,
        borderRadius:4,
        marginTop: 44,
    },

    buttonTitle:{
        fontSize: 20,
        fontWeight: '200',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        color: 'white',
    },
    secondaryButtonTitle:{
        fontSize: 18,
        fontWeight: '200',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        color: 'white',

    },
    separator:{
        backgroundColor:'#rgba(255,255,255,0.5)', 
        width:200, 
        height:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,    
        marginBottom:30,     
        borderRadius:4,

    },
    iconView: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },


});