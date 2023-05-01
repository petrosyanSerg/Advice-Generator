import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adviceSlice from "./adviceSlice/adviceSlice";

const rootReduce = combineReducers({
  advice: adviceSlice,
});

export const store = configureStore({
  reducer: rootReduce,
});

export type RootState = ReturnType<typeof rootReduce>;
export type AppDispatch = typeof store.dispatch;
