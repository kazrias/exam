import { createSlice, current } from '@reduxjs/toolkit';
const initialState = {
  createIsClicked: false,
  showIsClicked: false,
  users: []
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    createHandle: (state, action) => {
      state.createIsClicked = action.payload.createClick;

    },

    showHandle: (state, action) => {
      console.log('click');
      state.showIsClicked = action.payload.showClick;
      console.log(current(state).showIsClicked);
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    }
  }
})


export const { createHandle, showHandle, addUser } = appSlice.actions
export default appSlice.reducer