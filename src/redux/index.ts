import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    userReducer: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;