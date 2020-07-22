import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './modules/game';
import resultReducer from './modules/result';

const rootReducer = combineReducers({
  game: gameReducer,
  result: resultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore<RootState>({ reducer: rootReducer });
