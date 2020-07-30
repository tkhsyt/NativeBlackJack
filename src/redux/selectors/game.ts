import { createSelector } from 'reselect';
import { RootState } from '../store';
import { GameState, Result, ResultState } from '../../domain/declarations/models';

export const gameSelector = createSelector<RootState, GameState, GameState>(
  (state) => state.game,
  (game) => game,
);

export const resultSelector = createSelector<RootState, ResultState, Result[]>(
  (state) => state.result,
  (result) => result.data,
);
