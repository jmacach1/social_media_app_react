import { createSlice } from '@reduxjs/toolkit';


const teresa = require('sample_data/teresa.json');

// const initialState = {
//   username: ""
// }
const initialState = teresa;

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      const validUser = true;
      if (validUser) {
        state = Object.assign(state, teresa);
        console.log(state);
      }
    },
    logoutUser: (state) => {
      state = initialState
    }
  },
})

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;