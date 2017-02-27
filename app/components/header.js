import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class header extends Component { 
    render() {
        return (
            <View style={styles.container}> 
                <TouchableHighlight underlayColor='white' style={{padding:10, backgroundColor:'white', height:40}} onPress={this.props.onMenuPress}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="menu" color='#9B9B9B' size={30}/>
                    </View>
                </TouchableHighlight>  
                <TouchableHighlight underlayColor='white' style={{padding:10, backgroundColor:'white', height:40}} onPress={this.props.onMenuPress}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="search" color='#9B9B9B' size={30}/>
                    </View>
                </TouchableHighlight>  
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:10,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        height: 64,

    }
});