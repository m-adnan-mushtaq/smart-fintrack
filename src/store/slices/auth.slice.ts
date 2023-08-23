import { DbUser } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  user: DbUser | null;
  loading: boolean;
  verifyEmail: string;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  verifyEmail: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setVerifyEmail: (state, action: PayloadAction<string>) => {
      state.verifyEmail = action.payload;
    },
    setAuth: (state, action: PayloadAction<DbUser>) => {
      state.loading = false;
      state.user = action.payload;
    },
    resetAuth: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetAuth, setAuth, setAuthLoading, setVerifyEmail } =
  authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
