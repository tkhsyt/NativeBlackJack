import { createSelector } from 'reselect';
import { RootState } from '../store';
import { GameState } from '../../domain/declarations/models';

export const gameSelector = createSelector<RootState, GameState, GameState>(
  (state) => state.game,
  (game) => game,
);
