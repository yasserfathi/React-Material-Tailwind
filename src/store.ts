import { configureStore,createSlice } from '@reduxjs/toolkit'
const initialState = {value:{emailValue:""}}
const userSlice = createSlice({
  name:"email",
  initialState:initialState,
  reducers:{
    login:(state,action) => {
      state.value = action.payload;
    },
    logout:(_state) => {
      _state = initialState;
    }
  }
});

export const {login ,logout} = userSlice.actions;

export default configureStore({
  reducer: {
    email:userSlice.reducer,
  },
})