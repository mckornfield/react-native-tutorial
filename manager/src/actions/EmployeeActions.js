import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    const action = {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
    console.log(action);
    return action;
};