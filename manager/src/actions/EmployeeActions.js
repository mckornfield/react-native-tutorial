import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_CREATE,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_UPDATE
} from './types';

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

export const employeeSave = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
        firebase.database().ref(`${getRef()}/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.pop();
            });
    };
};

export const employeeDelete = ({ uid }) => {
    return (dispatch) => {
        firebase.database().ref(`${getRef()}/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
                Actions.pop();
            });
    };
};

const getRef = () => {
    const { currentUser } = firebase.auth();
    return `/users/${currentUser.uid}/employees`;
};