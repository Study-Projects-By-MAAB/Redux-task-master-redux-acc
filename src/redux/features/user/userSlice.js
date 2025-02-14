import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    name: "Mirhossain",
    email: "mir@gmail.com",
    userTasks: [],
  },
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
