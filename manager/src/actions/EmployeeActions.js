import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    const action = {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
    return action;
};

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        firebase.database().ref(getRef())
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        firebase.database().ref(getRef())
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

const getRef = () => {
    const { currentUser } = firebase.auth();
    return `/users/${currentUser.uid}/employees`;
};