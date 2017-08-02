import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ListView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const {width, height} = Dimensions.get('window')
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Search extends Component { 

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds,
        loaded: false,
        isSearching: false,
        feedURL: 'https://api.urbandictionary.com/v0/autocomplete?term='
    };
  }

    searchForTerm(term){
        let url = this.state.feedURL + term
        this.setState({isRefreshing: true})

        fetch(url).then((response) => response.json()).then((newsItems) => {
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(newsItems),
                loaded: true,
                isRefreshing: false,
                isAnimating: false
            })
        }).catch((error) => {
            console.error(error);
        });

    }
    onSearch(term) {
        this.props.navigator.push({
            title:'WoTD',
            search:term
        })
    }
    _renderRows(data) {
            return (
                <TouchableOpacity underlayColor='white' style={{backgroundColor:'white'}} onPress={() => this.onSearch(data)}>
                    <View style={styles.row}>
                        <Text style={styles.rowText}
                              numberOfLines={1}
                              ellipsizeMode="tail">{data}</Text>
                        {/* <Icon name="call-made" color='#9B9B9B' size={30}/> */}
                    </View>
                </TouchableOpacity>
            );
    }

    _renderHeader() {
        return(
            <View style={styles.headerGroup}>
            <View >
                <TouchableOpacity underlayColor='white' style={{padding:10, backgroundColor:'white', height:50}} onPress={this.props.onBack}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Icon name="arrow-back" color='#9B9B9B' size={30}/>
                    </View>
                </TouchableOpacity>  
            </View>

                <TextInput style={styles.input}
                    ref={(input) => this.searchInput = input}
                    placeholder='Enter Search Term'
                    placeholderTextColor='rgba(149, 165, 166,0.7)'
                    returnKeyType='search'
                    autoCapitalize='sentences'
                    autoFocus={true}
                    multiline={true}
                    clearButtonMode='always'
                    keyboardShouldPersistTaps={true}
                    onChangeText={(text) => this.searchForTerm(text)}
                />  
                
        </View>
        )
    

};

    render() {
        return (
            <View style={ styles.container }>
            <ListView
                contentContainer = { styles.listContainer }
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRows(rowData)}
                renderHeader={() => this._renderHeader()}
            />

            </View>
         );
    }
}