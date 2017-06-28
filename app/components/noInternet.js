import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
 const {width, height} = Dimensions.get('window')

export default class noInternet extends Component { 
    render() {
        return (
            <View style={ styles.container }>
                <Image style={styles.noInternetBackground} source={require('../resources/bgimage.png')} >
                    <Image style={{resizeMode:'contain'}} source={require('../resources/tombstone.png')}/>
                    <Image style={{width:width*0.8, resizeMode:'contain'}} source={require('../resources/no_internet_text.png')}/>

                </Image>
            </View>

         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },

    noInternet: {
        flex: 1,
        resizeMode: 'cover',
    },

    noInternetBackground: {
        width: width,
        height:height,
        resizeMode: 'stretch',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'       
    },

});