import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from './login/loginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer
  },
})