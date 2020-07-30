import { createSlice } from '@reduxjs/toolkit';
import { Result, ResultState } from '../../domain/declarations/models';

export const initialState: ResultState = {
  data: [],
};

const slice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultData: (state, { payload }: { payload: Result }) => {
      state.data = [...state.data, payload];
    },
  },
});

export default slice.reducer;
export const { setResultData } = slice.actions;
