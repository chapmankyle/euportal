import { combineReducers } from "redux";
import cartReducer from "./cartReducer.js";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";

const allReducer = combineReducers({ cart: cartReducer, auth: authReducer, theme: themeReducer });

export default allReducer;
