export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const UPDATE_CREATED_QUESTION = "UPDATE_CREATED_QUESTION";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user,
    };
}

export const updateCreatedQuestion = (userID, questionID) => {
    return {
        type: UPDATE_CREATED_QUESTION,
        userID,
        questionID,
    };
}

export const updateAnswers = (answers) => {
    return {
        type: UPDATE_ANSWERS,
        answers
    };
}