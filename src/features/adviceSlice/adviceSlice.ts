import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Base_URL } from "../../assets/Base_Url";
import { IAdvice } from "../../types";

import adviceAxios from "./adviceAxios";

export const getAdviceAsync = createAsyncThunk("@getAdviceAsync", async () => {
  return await adviceAxios(Base_URL);
});

interface IInitialStateAdvice {
  data: IAdvice;
  status: string;
  error: {} | undefined;
}

const initialState: IInitialStateAdvice = {
  data: {} as IAdvice,
  status: "",
  error: {},
};

const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdviceAsync.pending, (state) => {
        state.status = "panding";
        return state;
      })
      .addCase(getAdviceAsync.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
        return state;
      })
      .addCase(getAdviceAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.error = {};
        return state;
      });
  },
});

export default adviceSlice.reducer;
