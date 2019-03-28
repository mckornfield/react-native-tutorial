import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_CREATE, EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    const action = {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
    return action;
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};