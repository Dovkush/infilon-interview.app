import { combineReducers } from "redux";

import { GetUserReducer } from "./getUserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "Users",
  storage,
};
export const rootReducer = combineReducers({
  userData:GetUserReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;