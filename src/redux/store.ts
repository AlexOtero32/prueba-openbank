import uiReducer from './ui/reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
