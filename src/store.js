import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import { combineReducers } from "redux";
import authedUser from "./reducers/authedUser";
import users from "./reducers/users";
import questions from "./reducers/questions";
import { loadingBarReducer } from "react-redux-loading-bar";

const reducer = combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
});

const store = configureStore({ reducer: reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

export default store;