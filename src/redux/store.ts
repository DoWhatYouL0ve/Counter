import {legacy_createStore as createStore, combineReducers, Store} from "redux";
import {counterReducer} from "./counter_Reducer";
import {loadState, saveState} from "../utils/localStorage_utils";

const rootReducer = combineReducers({
        counter: counterReducer
})

export type StateType = ReturnType<typeof rootReducer>
// loadState() - automatically get data from local storage and set it as initial data
export const store: Store = createStore(rootReducer, loadState())

// automatically save to localStorage on every change
store.subscribe(()=>{
    saveState({counter: store.getState().counter})
})