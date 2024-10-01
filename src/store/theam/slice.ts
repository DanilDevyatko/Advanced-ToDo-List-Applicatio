// Currently not used but will be used in the future
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemState {
  themeMode: ThemeMode;
}

const initialState: ThemState = {
  themeMode: ThemeMode.LIGHT,
};

const theamSlice = createSlice({
  name: "theamMode",
  initialState,
  reducers: {
    setThem: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThem } = theamSlice.actions;
export default theamSlice.reducer;
