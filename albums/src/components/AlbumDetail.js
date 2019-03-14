import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text key={props.album.title}>{props.album.title}</Text>
        </View>
    )
}

export default AlbumDetail;
