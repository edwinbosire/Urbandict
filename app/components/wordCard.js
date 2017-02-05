import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Button, TouchableHighlight, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window')

export default class wordCard extends Component { 

    constructor(){
        super()
        this.state = {
            voteURL:'https://api.urbandictionary.com/v0/vote',
            voteUp:false,
            voteDown:false,
            upCount:0,
            downCount:0,
            upVoteColor:'#3498db',
            downVoteColor:'#3498db'
        }
    }

    componentDidMount(){
        this.setState({
            upCount:this.props.data.thumbs_up,
            downCount:this.props.data.thumbs_down
        })
    }
    onButtonPress() {

    }

    onShareItem(item) {
        Share.share({
            message:item.word,
            url: item.permalink,
            title:'Urban Dictionary'
        })
        .then(this._showResults)
        .catch((error) => this.setState({results:'error: ' + error.message}));
    }
    _showResult(result) {
        if (result.action === Share.sharedAction) {
        if (result.activityType) {
            this.setState({result: 'shared with an activityType: ' + result.activityType});
        } else {
            this.setState({result: 'shared'});
        }
        } else if (result.action === Share.dismissedAction) {
        this.setState({result: 'dismissed'});
        }
    }
    onVotePress(defid, vote){
        fetch(this.state.voteURL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                'defid':defid,
                direction:vote
            })
        })
        .then((response) => response.json())
        .then((voteResponse) => {
            this.setState({
                voteStatus:voteResponse.status,
                upCount:voteResponse.up,
                downCount:voteResponse.down,
                upVoteColor:(vote === 'up')? 'green' : '#3498db',
                downVoteColor:(vote === 'down')? 'green' : '#3498db'
            })

        }).catch((error) => {
            console.error(error);
        });
    }
    
    render() {
        return (
            <View style={ styles.container }>  
                <Text style ={styles.topDesription}> TOP DESCRIPTION </Text>
                <Text style={ styles.title }>{this.props.data.word} </Text>
                <Text style={ styles.definition }> {this.props.data.definition}</Text>
                <Text style={ styles.example }> {this.props.data.example}</Text>
                <Text style={ styles.author}> {this.props.data.author} </Text> 
                <View style={styles.footer}> 
                    <View style={styles.buttonGroup}>
                        <TouchableHighlight underlayColor='rgba(216, 216, 216, 0.5)' style={{padding:10, backgroundColor:'rgba(216, 216, 216, 0.3)', height:40}} onPress={() => this.onVotePress(this.props.data.defid, 'down')}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Icon name="thumb-down" color={this.state.downVoteColor} size={30}/>
                                <Text style={styles.buttonText}> {this.state.downCount}</Text>
                            </View>
                        </TouchableHighlight>  

                        <TouchableHighlight underlayColor='rgba(216, 216, 216, 0.5)' style={{padding:10, backgroundColor:'rgba(216, 216, 216, 0.3)', height:40, marginHorizontal:1}} onPress={() => this.onVotePress(this.props.data.defid, 'up')}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Text style={styles.buttonText}> {this.state.upCount}</Text>
                                <Icon name="thumb-up" color={this.state.upVoteColor} size={30}/>
                            </View>
                        </TouchableHighlight>                       
                     
                     </View>
                    <View style={styles.actionButton}> 
                        <TouchableHighlight underlayColor='rgba(216, 216, 216, 0.5)' style={{padding:10, height:40, marginHorizontal:1}} onPress={() => this.onShareItem(this.props.data)}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Icon name="send" color='#3498db' size={30}/>
                            </View>
                        </TouchableHighlight>                       

                    </View>
                </View>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        width: width-40,
        margin:20,
        padding:10,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
        height: 0,
        width: 0
        },
        borderRadius: 4,
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
        overflow:'visible'
    },
    topDesription:{
        fontSize: 10,
        fontWeight: '900',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'right',
        color: '#3498db',
        paddingBottom:10,
        opacity:0

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'left',
        color: '#3498db',
        paddingBottom:20,

    },
    definition: {
        fontSize: 19,
        fontWeight: '400',
        textAlign: 'left',
        color: '#4A4A4A',
        paddingBottom:20,

    },
    example:{
        fontSize: 14,
        fontStyle:'italic',
        fontWeight: '100',
        textAlign: 'left',
        color: '#23282C',
        paddingBottom:20,
    },
    author:{
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'left',
        color: '#bdc3c7',
        paddingBottom:20,
    },
    separator:{
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'left',
        color: '#bdc3c7',
        paddingBottom:20,
    },
    date:{
        fontSize: 14,
        fontWeight: '300',
        textAlign: 'left',
        color: '#bdc3c7',
        paddingBottom:20,
    },
    footer:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        height: 60,
    },
    buttonGroup:{
        //backgroundColor:'blue',
        flexDirection:'row',
        justifyContent: 'space-between',
        width:150,
    },
    thumbsUp:{
        width:80,
        height:40,
        backgroundColor:'#F4F4F4'
    },
    thumbsDown:{
        height:40,
        backgroundColor:'#F4F4F4'
    },    
    actionButton:{
        // backgroundColor:'#F4F4F4',
        // padding:5,
        // width:50,
    },
    buttonText:{
        paddingHorizontal:10,
        fontSize: 14,
        fontWeight: '300',


    }

});