import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xyz: [],
};

export const xyzSlice = createSlice({
  name: "xyz",
  initialState,
});

export default xyzSlice;
