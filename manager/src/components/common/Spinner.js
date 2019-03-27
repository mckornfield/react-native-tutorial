import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View styles={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} style={styles.indicatorStyle} />
        </View>
    );
};
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white'
    },
    indicatorStyle: {
        background: 'white'
    }
};
export { Spinner };
