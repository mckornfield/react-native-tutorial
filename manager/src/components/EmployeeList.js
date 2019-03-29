import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    renderItem({ item }) {
        return <EmployeeListItem employee={item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={(employee, index) => index.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // {shift: 'Monday', name: 'S', id: "ABCDADF"}
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);