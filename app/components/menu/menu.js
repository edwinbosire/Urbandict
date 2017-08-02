import React, { Component } from 'react';
import { StyleSheet, View , TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class menu extends Component { 
    state = {
        activeOpacity: 0.6,
        underlayColor:'rgba(0,0,0,0.001)',
    }
    render() {
        return (
             <View style={styles.container}>
                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.closeButton} onPress={this.props.toggleMenu}>
                    <View style={styles.iconView}>
                        <Icon name="close" color='white' size={44}/>
                    </View>
                </TouchableOpacity> 

                <View style={styles.innerContainer}>

                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.menuButton} onPress={this.props.wordOfTheDay}>
                    <View style={styles.iconView}>
                        <Icon name="trending-up" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> Word of the Day </Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.menuButton} onPress={this.props.onFeelingLucky}>
                    <View style={styles.iconView}>
                        <Icon name="shuffle" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> I'm Feeling Lucky </Text>
                    </View>
                </TouchableOpacity> 
                 <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.menuButton} onPress={this.props.onFavorite}>
                    <View style={styles.iconView}>
                        <Icon name="favorite" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> Favorites</Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.menuButton} onPress={this.props.onSearch}>
                    <View style={styles.iconView}>
                        <Icon name="search" color='white' size={30}/>
                        <Text style={styles.buttonTitle}> Search </Text>
                    </View>
                </TouchableOpacity> 

                <View style={styles.iconView}>
                    <View style={styles.separator}></View>
                </View>
                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.menuButton} onPress={this.props.onTrending}>
                    <View style={styles.iconView}>
                        <Icon name="star" color='white' size={25}/>
                        <Text style={styles.secondaryButtonTitle}> Rate Us </Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity  activeOpacity={this.state.activeOpacity} underlayColor={this.state.underlayColor} style={styles.secondaryMenuButton} onPress={this.props.onTrending}>
                    <View style={styles.iconView}>
                        <Icon name="question-answer" color='white' size={25}/>
                        <Text style={styles.secondaryButtonTitle}> Feedback </Text>
                    </View>
                </TouchableOpacity> 

                </View>

            </View>

         );
    }
}
 
