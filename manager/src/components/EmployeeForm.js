import React from 'react';
import { Picker, Text, View } from 'react-native';
import { CardSection, Input } from './common';

const renderPickerItems = () => {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
        day => <Picker.Item key={day} label={day} value={day} />
    );
};
const EmployeeForm = (props) => {
    return (<View>
        <CardSection>
            <Input
                label="Name"
                placeholder="Jane"
                value={props.name}
                onChangeText={value => props.employeeUpdate(
                    { prop: 'name', value }
                )}
            />
        </CardSection>
        <CardSection>
            <Input
                label="Phone"
                placeholder="555-555-5555"
                value={props.phone}
                onChangeText={value => props.employeeUpdate(
                    { prop: 'phone', value }
                )}
            />
        </CardSection>
        <CardSection>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
                style={{ flex: 2 }}
                selectedValue={props.shift}
                onValueChange={value => props.employeeUpdate(
                    { prop: 'shift', value }
                )}
            >
                {renderPickerItems()}
            </Picker>
        </CardSection>
    </View>);
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        flex: 1
    }
};


export default EmployeeForm;