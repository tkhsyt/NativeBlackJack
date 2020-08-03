import Realm from 'realm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Result, ResultState } from '../../domain/declarations/models';
import { RESULT_SCHEMA } from '../../domain/declarations/schema';

export const initialState: ResultState = {
  data: [],
};

export const loadResultData = createAsyncThunk<Result[]>('loadResultData  ', async () => {
  const realm: Realm = await Realm.open({
    schema: [RESULT_SCHEMA],
    schemaVersion: 1,
  });
  const parseData: Result[] = Object.values(JSON.parse(JSON.stringify(realm.objects(RESULT_SCHEMA.name))));
  realm.close();
  return parseData;
});

const slice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultData: (state, { payload }: { payload: Result }) => {
      state.data = [...state.data, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadResultData.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default slice.reducer;
export const { setResultData } = slice.actions;
