import { createStore } from "zustand";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};
type Actions = {
  updateActivityBadge: (count: number) => void;
};

export const useActivityStore = createStore<State & Actions>()((set) => ({
  ...initialState,
  updateActivityBadge(count: number) {
    set({ count });
  },
}));
