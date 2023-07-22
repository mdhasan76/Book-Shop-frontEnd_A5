import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookSlice from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
