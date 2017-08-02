import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width-20,
        margin:10,
        // padding:10,
        shadowColor: "rgba(0,0,0,0.41)",
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
        overflow:'visible',
        marginTop:40,

    },
    headerGroup:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        borderBottomColor: '#E8E8E8', 
        borderBottomWidth: 1, 
        

    },
    input: {
        height: 50,
        width:width-90,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    listContainer:{
        margin:20
    },
    row:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        borderBottomColor: '#E8E8E8', 
        borderBottomWidth: 1, 
        marginHorizontal:15,
    },
    rowText:{
        fontSize: 20,
        textAlign: 'left',
        margin: 10,

    }

});