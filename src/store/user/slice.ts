import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
}
const initialState: UserState = {
  name: "Danny",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
