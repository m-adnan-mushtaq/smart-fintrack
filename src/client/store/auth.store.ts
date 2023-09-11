// global store for managing auth store
import { DbUser } from "@/lib/types";
import { create } from "zustand";

type State = {
  user: null | DbUser;
  verifyEmail: string | undefined;
};

type Actions = {
  setUser: (user: DbUser) => void;
  resetUser: () => void;
  updateVerifyEmail: (email: string) => void;
};

const initialState: State = {
  user: null,
  verifyEmail: undefined,
};
export const useAuthStore = create<State & Actions>()((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
  resetUser: () => set({ user: null }),
  updateVerifyEmail: (email) => set({ verifyEmail: email }),
}));

