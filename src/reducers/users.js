import { RECEIVE_USERS, ADD_USER, UPDATE_CREATED_QUESTION } from "../actions/users";

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
        case UPDATE_CREATED_QUESTION:
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    questions: [...state[action.userID].questions, action.questionID]
                }
            }
        default:
            return state;
    }
}

export default users;