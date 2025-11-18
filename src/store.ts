import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TabState {
  selectedTab: string;
}

const initialState: TabState = {
  selectedTab: 'Home',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setSelectedTab(state, action: PayloadAction<string>) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = tabSlice.actions;

const store = configureStore({
  reducer: {
    tab: tabSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
