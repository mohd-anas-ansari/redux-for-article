import { createStore } from "redux";
import { countReducer } from "./reducers/countReducer";

export let store = createStore(countReducer);
