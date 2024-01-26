import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../fratures/todo/todoSlice';
export default configureStore({
  reducer: todoReducer
})