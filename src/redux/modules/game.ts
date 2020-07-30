import { createSlice } from '@reduxjs/toolkit';
import { getInitialCards } from '../../domain/logics/getInitialCards';
import { GameState } from '../../domain/declarations/models';
import { shuffle } from '../../domain/logics/shuffle';

export const initialState: GameState = {
  deck: [],
  playerHands: [],
  isStandPlayer: false,
  dealerHands: [],
  isStandDealer: false,
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setInitializeGame: (state) => {
      // TODO: ここのロジック超キモいのでなんとかしたい
      state.deck = shuffle(getInitialCards());
      state.isStandPlayer = false;
      state.isStandDealer = false;
      state.playerHands = [state.deck[0], state.deck[2]];
      state.dealerHands = [state.deck[1], state.deck[3]];
      state.deck = state.deck.filter((card, index) => index > 3);
    },
    setHitPlayer: (state) => {
      state.playerHands = [...state.playerHands, state.deck[0]];
      state.deck = state.deck.filter((card, index) => index !== 0);
    },
    setHitDealer: (state) => {
      state.dealerHands = [...state.dealerHands, state.deck[0]];
      state.deck = state.deck.filter((card, index) => index !== 0);
    },
    setStandPlayer: (state, { payload }: { payload: boolean }) => {
      state.isStandPlayer = payload;
    },
    setStandDealer: (state, { payload }: { payload: boolean }) => {
      state.isStandDealer = payload;
    },
  },
});

export default slice.reducer;
export const { setInitializeGame, setHitPlayer, setHitDealer, setStandPlayer, setStandDealer } = slice.actions;
