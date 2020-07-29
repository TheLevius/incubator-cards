import { createStore, combineReducers } from "redux";
import testReducer from './testReducer';

export const rootReducer = combineReducers({
    testReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

