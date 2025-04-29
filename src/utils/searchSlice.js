import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...state, ...action.payload };
      //   state = Object.assign(state, action.payload);
      // 8 and 9 both works but state = {...state, ...action.payload} not works because here we are reassigning state , not mutating. We should mutate state to store updated values in redux store
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
