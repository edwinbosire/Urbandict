import React, { Component } from 'react';
import { StyleSheet, View , TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class menu extends Component { 
    render() {
        return (
             <View style={styles.container}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.closeButton} onPress={this.props.toggleMenu}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="close" color='white' size={44}/>
                    </View>
                </TouchableOpacity> 

                <View style={styles.innerContainer}>

                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.menuButton} onPress={this.props.wordOfTheDay}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="trending-up" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> Word of the Day </Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.menuButton} onPress={this.props.onFeelingLucky}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="shuffle" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> I'm Feeling Lucky </Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.menuButton} onPress={this.props.onSearch}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="search" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> Search </Text>
                    </View>
                </TouchableOpacity> 

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.separator}></View>
                </View>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.menuButton} onPress={this.props.onTrending}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="star" color='white' size={25}/>
                        <Text style={styles.secondaryButtonTitle}> Rate Us </Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.secondaryMenuButton} onPress={this.props.onTrending}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="question-answer" color='white' size={25}/>
                        <Text style={styles.secondaryButtonTitle}> Feedback </Text>
                    </View>
                </TouchableOpacity> 

                </View>

            </View>

         );
    }
}
 
const styles = StyleSheet.create({
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


});