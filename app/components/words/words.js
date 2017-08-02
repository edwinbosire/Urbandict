import React, { Component } from 'react';
import {
    View,
    ListView,
    Text,
    Dimensions,
    StatusBar,
    ActivityIndicator,
    TouchableOpacity,
    InteractionManager,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window')

import Card from './../wordcard/wordCard';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
import styles from './styles';
import GLOBAL from '../../../app/GLOBAL';
import lodash from 'lodash';

export default class words extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,
            loaded: false,
            isAnimating: true,
            isRefreshing: true,
            feedURL: 'https://api.urbandictionary.com/v0/words_of_the_day',
            fav: []

        };
    }

    componentDidMount() {
        this.setState({ feedURL: this.props.feedURL })
        if (this.props.feedURL !== "fav")
            this.fetchWordsOfTheDay();
        else
            this.getFavorites();

        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderPlaceholderOnly: false });

        });

    }

    async getFavorites() {
        try {
            let favs = await AsyncStorage.getItem(GLOBAL.udfav);
            if(favs === null) favs = [];
            favs = JSON.parse(favs);
            favs = favs.length > 0 ? JSON.parse(favs) : favs;
            favs.map((data) => {
                data.is_favorited = true;
            })
            this.setState({
                fav: favs,
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(favs),
                loaded: true,
                isRefreshing: false,
                isAnimating: false
            });
        } catch (err) {
            console.log(err);
        }

    }

    async fetchWordsOfTheDay() {
        this.setState({ isRefreshing: true })
        var current = [];
        let favs = [];
        try {
            favs = await AsyncStorage.getItem(GLOBAL.udfav);
            if(favs === null) favs = [];
            favs = JSON.parse(favs);
        } catch (err) {
            console.log(err);
        }
        try {
            fetch(this.props.feedURL).then((response) => response.json()).then((newsItems) => {
                current = newsItems.list;
                _checked = this.checkFavorites(favs, current);

                this.setState({
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(_checked),
                    loaded: true,
                    isRefreshing: false,
                    isAnimating: false
                })
            }).catch((error) => {
                console.log(error);
                this.setState({
                    loaded: true,
                    isRefreshing: false,
                    isAnimating: false
                })
            });

        } catch (err) {
            console.log(err);
        }

    }

    checkFavorites(fav, current) {
        checked = [];

        var result = lodash.intersectionWith(current, fav, function (o1, o2) {
            return o1['defid'] === o2['defid']
        });

        for (let i = 0; i < current.length; i++) {
            let curr = current[i];
            let isfav = result.filter(function (word) {
                return word.defid === curr.defid;
            });

            if (isfav.length !== 0) {
                curr["is_favorited"] = true;
            } else {
                curr["is_favorited"] = false;
            }

            checked.push(curr);
        }

        return checked;
    }

    _renderRows(data) {
        return (<Card style={styles.card} data={data} />);
    }

    renderLoadingIndicator() {
        return (
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
                {/* <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.closeButton} onPress={this.props.onBack}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Icon name="close" color='rgba(52, 152, 219,1.0)' size={44}/>
                </View>
            </TouchableOpacity> 
*/}
                <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, backgroundColor: 'white' }} >
                    <ActivityIndicator
                        animating={this.state.animating}
                        color='#e67e22'
                        style={[styles.centering, { height: 80 }]}
                        size="large" />
                </View>


            </View>
        );
    }


    renderWordsFeed() {
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor={GLOBAL.primaryDark}
                    barStyle="default"
                />
                <View style={styles.header}>
                    <TouchableOpacity underlayColor='white' style={styles.navButton} onPress={this.props.onBack}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="arrow-back" color='#9B9B9B' size={30} />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.title}> {this.props.title}</Text>

                    <TouchableOpacity underlayColor='white' style={styles.navButton} onPress={this.props.onMenuPress}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="search" color='#9B9B9B' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>

                <ListView
                    contentContainer={styles.listContainer}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRows({ ...rowData })}
                />

            </View>
        );
    }

    render() {
        return this.state.isRefreshing ? this.renderLoadingIndicator() : this.renderWordsFeed()
    }

}
