import { RECEIVE_USERS, ADD_USER } from "../actions/users";

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: action.user,
            }
        default:
            return state;
    }
}

export default users;