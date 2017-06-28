/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NetInfo
} from 'react-native';
import MainScene from './app/components/mainScene'
import WordFeed from './app/components/words'
import Search from './app/components/search'
import NoConnection from './app/components/noInternet'

export default class UrbanDictionary extends Component {
   state = {
        isNetworkConnected: false
    }
    componentDidMount(){
        NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
        NetInfo.isConnected.fetch().then(isConnected =>{
            {this.setState({ status: isConnected });}
        });
        console.log('component did mount')
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
    }

    handleConnectionChange = (isConnected) => {
        this.setState({ isNetworkConnected: isConnected });
        console.log(`is connected: ${isConnected}`);
    }

  render() {
        if (this.state.isNetworkConnected === false){
            return(<NoConnection />);
        }else{
          return (
            <Navigator
              initialRoute={{ title: 'Main', index: 0 }}
              configureScene={(route, routeStack) => {
                if(route.title === 'Search'){
                return Navigator.SceneConfigs.FloatFromBottom
              }else{
                return Navigator.SceneConfigs.FloatFromRight
                }
              }}

              renderScene={(route, navigator) => {
                
                if(route.title === 'Main'){
                  return (
                  <MainScene navigator={navigator}
                  
                    onPresentSearch={() => {
                      navigator.push({
                        title:'Search'
                      });
                    }}

                  />);
              }

              if(route.title === 'WoTD'){
                return(
                <WordFeed 
                  title={route.search}
                  feedURL={'https://api.urbandictionary.com/v0/define?term='+route.search}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
              if(route.title === 'WoTD_2'){
                return(
                <WordFeed 
                  title={'Word of the Day'}
                  feedURL={'https://api.urbandictionary.com/v0/words_of_the_day'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }

              if(route.title === 'Random'){
                return(
                <WordFeed 
                  title={'Random'}
                  feedURL={'https://api.urbandictionary.com/v0/random'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
              if(route.title === 'Search'){
                return(
                <Search 
                  navigator={navigator}
                  title={'Search'}
                  title={'Random'}
                  onBack={() => {
                        navigator.pop()
                    }} 
                  />
                  );
                }
                }
              }
              />
      );
        }
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UrbanDictionary', () => UrbanDictionary);
