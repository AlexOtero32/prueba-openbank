import uiReducer from './ui/reducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, {});
