import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Mir Hussain",
  email: "mir@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
