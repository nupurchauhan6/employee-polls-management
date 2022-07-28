import { RECEIVE_USERS, ADD_USER, UPDATE_CREATED_QUESTION, UPDATE_ANSWERS } from "../actions/users";

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
        case UPDATE_ANSWERS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    answers: action.answers
                }
            }
        default:
            return state;
    }
}

export default users;