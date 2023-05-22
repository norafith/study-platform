import { configureStore } from "@reduxjs/toolkit";
import test from "./reducers/test";

const store = configureStore({ reducer: { test } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
