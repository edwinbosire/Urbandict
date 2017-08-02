import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Share, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import GLOBAL from '../../../app/GLOBAL';
import Toast from 'react-native-simple-toast';


export default class wordCard extends Component {

    constructor() {
        super()
        this.state = {
            voteURL: 'https://api.urbandictionary.com/v0/vote',
            voteUp: false,
            voteDown: false,
            upCount: 0,
            downCount: 0,
            upVoteColor: '#3498db',
            downVoteColor: '#3498db',
            favorite: 'favorite-border',
            underlayColor: 'rgba(216, 216, 216, 0.5)',
            favorites: []
        }
    }

    async componentDidMount() {

        try {
            let favs = await AsyncStorage.getItem(GLOBAL.udfav);
            if (favs === null) favs = [];
            this.setState({
                upCount: this.props.data.thumbs_up,
                downCount: this.props.data.thumbs_down,
                favorites: favs.length > 0 ? JSON.parse(favs) : favs,
                favorite: this.props.data.is_favorited ? "favorite" : "favorite-border"
            });
        } catch (err) {
            Toast.show('fail to get favorites');
        }

    }


    onShareItem(item) {
        Share.share({
            message: item.word + "\n" + item.definition,
            url: item.permalink,
            title: 'Urban Dictionary'
        })
            .then(this._showResults)
            .catch((error) => this.setState({ results: 'error: ' + error.message }));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({ result: 'shared with an activityType: ' + result.activityType });
            } else {
                this.setState({ result: 'shared' });
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({ result: 'dismissed' });
        }
    }

    async onFavoritePress(data) {
        delete data.is_favorited;
        if (this.state.favorite !== "favorite") {
            _data = JSON.parse(JSON.stringify(data));
            let favs = await AsyncStorage.getItem(GLOBAL.udfav);
            if (favs === null) favs = [];
            favs = favs.length > 0 ? JSON.parse(favs) : favs;
            favs.push(_data);
            this.setState({
                favorites: favs,
                favorite: 'favorite'
            })
            this.saveData(JSON.stringify(this.state.favorites), data, "save");
        } else {
            Alert.alert(
                'Are you sure want to remove this item from favorites',
                data.word,
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Delete', onPress: () => this.deleteFavorite(data) },
                ],
                { cancelable: false }
            )
        }
    }

    async deleteFavorite(data) {
        var favs = await AsyncStorage.getItem(GLOBAL.udfav);
        if (favs === null) favs = [];
        favs = favs.length > 0 ? JSON.parse(favs) : favs;
        let filt = favs.filter((obj) => {
            return obj.defid !== data.defid
        })

        this.setState({
            favorites: filt,
            favorite: 'favorite-border'
        });
        this.saveData(JSON.stringify(this.state.favorites), data, "delete");
    }

    async saveData(value, data, action) {
        let save = true;
        try {
            await AsyncStorage.setItem(GLOBAL.udfav, value);

        } catch (err) {
            save = false;
        }

        if (save && action === "save") Toast.show(data.word + ' saved');
        else if (save) Toast.show(data.word + ' has been removed from favorites');
        else Toast.show('failed');
    }


    onVotePress(defid, vote) {
        fetch(this.state.voteURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'defid': defid,
                direction: vote
            })
        })
            .then((response) => response.json())
            .then((voteResponse) => {
                this.setState({
                    voteStatus: voteResponse.status,
                    upCount: voteResponse.up,
                    downCount: voteResponse.down,
                    upVoteColor: (vote === 'up') ? 'green' : '#3498db',
                    downVoteColor: (vote === 'down') ? 'red' : '#3498db'
                })

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.topDesription}> TOP DESCRIPTION </Text>
                <Text style={styles.title} selectable={true}>{this.props.data.word}</Text>
                <Text style={styles.definition} selectable={true}>{this.props.data.definition}</Text>
                <Text style={styles.example} selectable={true}>{this.props.data.example}</Text>
                <Text style={styles.author} selectable={true}>{this.props.data.author}</Text>
                <View style={styles.footer}>
                    <View style={styles.buttonGroup}>
                        <TouchableHighlight underlayColor={this.state.underlayColor} style={styles.outerIcon}
                            onPress={() => this.onVotePress(this.props.data.defid, 'down')}>
                            <View style={styles.iconView}>
                                <Icon name="thumb-down" color={this.state.downVoteColor} size={25} />
                                <Text style={styles.buttonText}> {this.state.downCount}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={this.state.underlayColor} style={styles.outerIcon}
                            onPress={() => this.onVotePress(this.props.data.defid, 'up')}>
                            <View style={styles.iconView}>
                                <Text style={styles.buttonText}> {this.state.upCount}</Text>
                                <Icon name="thumb-up" color={this.state.upVoteColor} size={25} />
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={this.state.underlayColor} style={styles.outerIcon}
                            onPress={() => this.onFavoritePress(this.props.data)}>
                            <View style={styles.iconView}>
                                <Icon name={this.state.favorite} color='#3498db' size={25} />
                            </View>
                        </TouchableHighlight>

                    </View>
                    <View style={styles.actionButton}>
                        <TouchableHighlight underlayColor={this.state.underlayColor}
                            style={styles.outerIcon}
                            onPress={() => this.onShareItem(this.props.data)}>
                            <View style={styles.iconView}>
                                <Icon name="share" color='#3498db' size={25} />
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        );
    }
}