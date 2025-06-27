// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './customizationReducer';

export const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
