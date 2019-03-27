import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router >
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        sceneStyle={styles.sceneStyle}
                        title="Please Login"
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        sceneStyle={styles.sceneStyle}
                        title="Employees"
                    />
                    <Scene key="employeeDetail" />
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