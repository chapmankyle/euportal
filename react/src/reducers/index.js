import { combineReducers } from "redux";
import cartReducer from "./cartReducer.js";
import authReducer from "./authReducer";

const allReducer = combineReducers({ cart: cartReducer, auth: authReducer });

export default allReducer;
