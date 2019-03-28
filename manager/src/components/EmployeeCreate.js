import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    renderPickerItems() {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
            day => <Picker.Item key={day} label={day} value={day} />
        );
    }
    render() {
        return (<Card>
            <CardSection>
                <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate(
                        { prop: 'name', value }
                    )}
                />
            </CardSection>
            <CardSection>
                <Input
                    label="Phone"
                    placeholder="555-555-5555"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate(
                        { prop: 'phone', value }
                    )}
                />
            </CardSection>
            <CardSection>
                <Text style={styles.pickerTextStyle}>Shift</Text>
                <Picker
                    style={{ flex: 2 }}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                >
                    {this.renderPickerItems()}
                </Picker>
            </CardSection>
            <CardSection>
                <Button>Create</Button>
            </CardSection>
        </Card>);
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        flex: 1
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);