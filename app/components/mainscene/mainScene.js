import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feed from './../words/words'
import Header from'./../header/header';
import Search from './../search/search';
import Menu from './../menu/menu';
import NoConnection from './../noInternet';
import styles from './styles';
import GLOBAL from '../../../app/GLOBAL';

const {width, height} = Dimensions.get('window')

export default class mainScene extends Component { 

    state = {
        modalVisible: false,
        isNetworkConnected: false,
        underlayColor:'white',
    }

    componentDidMount(){
        this.setState({
            menuIsVisible:false,
        })
    }

    setMenuVisible(visible) {
        this.setState({menuIsVisible: visible})
    }

    onMenuPress() {
        this.setMenuVisible(!this.state.menuIsVisible)
    }

    onSearchPress(){
        this.setMenuVisible(false)
        this.props.navigator.push({
            title: 'Search'
        })

    }
    onButtonPress(){
        this.props.navigator.push({
            title: 'Search'
        })
    }
    onRandomPress() {
        this.setMenuVisible(false)
            this.props.navigator.push({
                title:'Random'
            })
    }
    onTrendingPressed(word){
        this.props.navigator.push({
            title: 'WoTD',
            search: word
        })
    }
    onFavoritePressed(){
        this.setMenuVisible(false)
        this.props.navigator.push({
            title: 'Favorites'
        })
    }
    onMenuWoTDPressed(){
        this.setMenuVisible(false)
        this.props.navigator.push({
            title:'WoTD_2'
        })
    }

    header(){
        return(
            <View style={styles.header}> 
                <TouchableOpacity underlayColor={this.state.underlayColor} 
                                  style={styles.outerIcon} onPress={() => this.onMenuPress()}>
                    <View style={styles.iconView}>
                        <Icon name="menu" color={GLOBAL.primaryColor} size={GLOBAL.mediumIcon}/>
                    </View>
                </TouchableOpacity>  
                <TouchableOpacity underlayColor={this.state.underlayColor} 
                                  style={styles.outerIcon} onPress={() => this.onSearchPress()}>
                    <View style={styles.iconView}>
                        <Icon name="search" color={GLOBAL.primaryColor} size={GLOBAL.mediumIcon}/>
                    </View>
                </TouchableOpacity>  
            </View>
        );
    }

    logo() {
        return(
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={require('../../resources/IconLarge.png')} resizeMode='cover'/>
            </View>
        );
    }

    buttonGroup(){
        return(
            <View style={styles.buttonGroups}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' 
                                   style={styles.feelingLucky} 
                                   onPress={() => this.onRandomPress()}>
                    <View style={styles.iconView}>
                        <Icon name="shuffle" color='rgba(149, 165, 166,1.0)' size={GLOBAL.largeIcon}/>
                        <Text style={styles.buttonTitle}> I'm Feeling Lucky </Text>
                    </View>
                </TouchableOpacity> 
            </View>
        );
    }

    onRequestClose() {

    }
    render() {
        return (
            <View style={ styles.container }>  
                <StatusBar backgroundColor={GLOBAL.primaryDark} barStyle="default" />
                <Modal 
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.menuIsVisible}
                    onRequestClose={this.onRequestClose}
                > 
                <Menu toggleMenu={() => this.setMenuVisible(!this.state.menuIsVisible)}
                    wordOfTheDay={() => this.onMenuWoTDPressed()}
                    onFavorite={()=> this.onFavoritePressed()}
                    onSearch={() => this.onSearchPress()}
                    onFeelingLucky={() => this.onRandomPress()}
                        />
                </Modal>
                {this.header()}
                {this.logo()}
                {this.buttonGroup()}
            </View>
        ); 
    }
}
 