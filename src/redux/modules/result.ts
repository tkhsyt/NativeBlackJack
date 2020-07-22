import { createSlice } from '@reduxjs/toolkit';
import { ResultState } from '../../domain/declarations/models';

// TODO: あとでスライスをバラす
export const initialState: ResultState = {
  playingData: [],
};

const slice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
});

export default slice.reducer;
