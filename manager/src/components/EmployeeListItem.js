import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name, phone, shift } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{`${name} | ${phone} | ${shift}`}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>);
    }
}

const styles = {
    titleStyle: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;