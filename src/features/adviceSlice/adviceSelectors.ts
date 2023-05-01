import { RootState } from "../store";

export const adviceSelect = (state: RootState) => state.advice.data.slip;
