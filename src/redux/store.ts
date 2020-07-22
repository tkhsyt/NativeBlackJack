import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './modules/game';

const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore<RootState>({ reducer: rootReducer });
