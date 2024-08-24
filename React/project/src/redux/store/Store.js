import { createStore } from "redux";
import { reducer } from "../productReducer/reducer";

export const Store = createStore(reducer,{})