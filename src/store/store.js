import kokReducer from "./kokReducer";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(kokReducer, applyMiddleware(thunk, logger));