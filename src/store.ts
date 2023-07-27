import { configureStore } from '@reduxjs/toolkit';
import { featuredProductSlice } from './features/featuredProduct';
import { durotanApi } from './services';
export const store = configureStore({
  reducer: {
    featuredProduct: featuredProductSlice.reducer,
    [durotanApi.reducerPath]: durotanApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(durotanApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
