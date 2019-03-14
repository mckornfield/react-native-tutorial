// import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import data from './music_albums';
import AlbumDetail from './AlbumDetail';

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
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>{this.renderAlbums()}</View>
        );
    }
}

// make the component available to other parts of the app
export default AlbumList;
