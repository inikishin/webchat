import { combineReducers } from "redux";

import { chat } from "./chat";
import { users } from "./users";
import { groups } from './groups';
import { auth } from './auth';

export const rootReducer = combineReducers({
    chat: chat,
    auth: auth,
    users: users,
    groups: groups
});