import { createStore, applyMiddleware } from "redux";
import persistedReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(persistedReducer, applyMiddleware(thunk));
