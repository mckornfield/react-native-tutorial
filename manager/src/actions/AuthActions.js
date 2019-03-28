import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED, LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS, PASSWORD_CHANGED, LOGIN_USER_START
} from './types';

const stub = false;

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    console.log('in loginUser');
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });
        if (stub) {
            const user = { a: 'a' };
            loginUserSuccess(dispatch, user);
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((e) => {
                console.log(e);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(error => loginUserFail(dispatch, error));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.main();
};
const loginUserFail = (dispatch, error) => dispatch({ type: LOGIN_USER_ERROR, payload: error });
