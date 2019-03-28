import React from 'react';
import { View, Text } from 'react-native';

const EmployeeListItem = (props) => {
    const { name, phone, shift } = props.employee;
    return (<View>
        <Text style={styles.titleStyle}>{`${name} | ${phone} | ${shift}`}</Text>
    </View>);
};

const styles = {
    titleStyle: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;