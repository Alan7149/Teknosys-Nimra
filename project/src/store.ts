// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './reducers/customizationReducer'; // adjust path if needed

export const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
});

// Type definitions (for TypeScript support)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
