import {combineReducers} from 'redux';

import {authReducer} from "./auth/authReducer";
import {chatReducer} from "./chat/chatReducer";


export const rootReducer = combineReducers({
  chatReducer,
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
