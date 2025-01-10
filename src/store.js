import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counter/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})