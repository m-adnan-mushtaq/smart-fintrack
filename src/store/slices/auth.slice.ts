import { UserType } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  user: UserType | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    resetAuth: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetAuth, setAuth } = authSlice.actions;
const authReducer= authSlice.reducer;
export default authReducer
