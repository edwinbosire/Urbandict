import React, { Component } from 'react';
import {  View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class header extends Component {  
    
    state = {
        iconColor:'#9B9B9B',
        iconSize:30, 
        outerIconColor:'white',
    };
    render() {
        return (
            <View style={styles.container}> 
                <TouchableHighlight underlayColor={this.state.outerIconColor} style={styles.outerIcon} onPress={this.props.onMenuPress}>
                    <View style={styles.Icon}>
                        <Icon name="menu" color={this.state.iconColor} size={this.state.iconSize}/>
                    </View>
                </TouchableHighlight>  
                <TouchableHighlight underlayColor='white' style={styles.outerIcon} onPress={this.props.onMenuPress}>
                    <View style={styles.Icon}>
                        <Icon name="search" color={this.state.iconColor} size={this.state.iconSize}/>
                    </View>
                </TouchableHighlight>  
            </View>
         );
    }
}