import { createSlice } from '@reduxjs/toolkit';


// const annie = require('sample_data/annie.json');
// const initialState = {
//   iseeya_user : annie
// }
const initialState = {
  iseeya_user: null
}

export const loginSlice = createSlice({
  name : 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.iseeya_user = action.payload;
    },
    logoutUser: (state) => {
      state.iseeya_user = null;
    }
  },
})

export default loginSlice.reducer;
export const { loginUser, logoutUser } = loginSlice.actions;
