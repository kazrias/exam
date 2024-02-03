import { createSlice, current } from '@reduxjs/toolkit';
const initialState = {
  createIsClicked: false,
  showIsClicked: false,
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    createHandle: (state, action) => {
      state.createIsClicked = action.payload.createClick;
      console.log(current(state).createIsClicked);
    },

    showHandle: (state, action) => {
      state.showIsClicked = action.payload.showClick;
      console.log(current(state).showIsClicked);
    },
  }
})


export const { createHandle, showHandle } = appSlice.actions
export default appSlice.reducer