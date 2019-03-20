import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    const { labelStyle, containerStyle, inputStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        color: '#000',
        fontSize: 18,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 23,
        flex: 2
    }
}

export { Input };