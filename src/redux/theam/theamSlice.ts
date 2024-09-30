// Currently not used but will be used in the future
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TheamState {
  themeMode: "light" | "dark";
}

const initialState: TheamState = {
  themeMode: "light",
};

const theamSlice = createSlice({
  name: "theamMode",
  initialState,
  reducers: {
    setThem: (state, action: PayloadAction<"light" | "dark">) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThem } = theamSlice.actions;
export default theamSlice.reducer;
