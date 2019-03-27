import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={styles.sceneStyle}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeDetail()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                    />
                    <Scene
                        key="employeeDetail"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    sceneStyle: {
        paddingTop: StatusBar.currentHeight + 25
    }
};
export default RouterComponent;