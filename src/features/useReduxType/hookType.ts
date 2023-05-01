import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAddDispatch = () => useDispatch<AppDispatch>();
export const useAddSelctior: TypedUseSelectorHook<RootState> = useSelector;
