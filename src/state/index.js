import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  const storedMode = localStorage.getItem("mode");
  return storedMode !== null ? storedMode : "light";
};

const initialState = {
  mode: getInitialMode(),
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", newMode);
      state.mode = newMode;
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
