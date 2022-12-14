
import { combineReducers } from '@reduxjs/toolkit';

import { default as user } from './user';

const rootReducer = combineReducers({
  user,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;