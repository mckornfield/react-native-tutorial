import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload,
                error: ''
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload,
                error: ''
            };
        case LOGIN_USER_START:
            return {
                ...state,
                user: action.payload,
                loading: true,
                error: ''
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
                error: '',
                loading: false
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
                password: '',
                loading: false
            };

        default:
            return state;
    }
};