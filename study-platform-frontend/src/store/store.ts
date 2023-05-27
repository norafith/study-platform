import { configureStore } from "@reduxjs/toolkit";
import navigation from "./reducers/navigation";

const store = configureStore({ reducer: { navigation } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
