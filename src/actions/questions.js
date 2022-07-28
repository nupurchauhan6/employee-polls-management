export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export const updateQuestion = (id, optionOne, optionTwo) => {
    return {
        type: UPDATE_QUESTION,
        id,
        optionOne,
        optionTwo
    }
}