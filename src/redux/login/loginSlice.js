import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: ""
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      const validUser = true;
      if (validUser) {
        state.username = action.payload.username
      }
    },
    logoutUser: (state) => {
      state = initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;