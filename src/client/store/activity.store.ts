import { create } from "zustand";

type State = {
  connected: boolean;
};

const initialState: State = {
  connected: false,
};
type Actions = {
  updatePusherStatus: (value: boolean) => void;
};

export const useActivityStore = create<State & Actions>()((set) => ({
  ...initialState,
  updatePusherStatus(value) {
    set({ connected: value });
  },
}));
