// import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import data from './music_albums';
import data from './AlbumDetail';

// make a component
class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        // fetch('music_albums.json')
        //     .then(response => response.json())
        //     .then(responseJson =>
        //         this.setState({ albums: responseJson }));
        this.setState({ albums: data });
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return (<Text key={album.title}>{album.title}</Text>);
        });
    }

    render() {
        console.log(this.state);
        return (
            <View>{this.renderAlbums()}</View>
        );
    }
}

const style = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: 60,
        paddingTop: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the app
export default AlbumList;
