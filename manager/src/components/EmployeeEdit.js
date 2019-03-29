import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeDelete, employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        const uid = this.props.employee.uid;
        this.props.employeeSave({ name, phone, shift, uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({ showModal: !this.state.showModal });
    }

    onFireAccept() {
        this.setState({ showModal: !this.state.showModal });
        const uid = this.props.employee.uid;
        this.props.employeeDelete({ uid });
    }


    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onFireAccept.bind(this)}
                    onDecline={this.onFirePress.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeSave, employeeUpdate, employeeDelete
})(EmployeeEdit);