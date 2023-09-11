//store for updating email address
import { create } from "zustand";
import { TStepContent } from "@client/types";

type StepT = {
  label: string;
  content: TStepContent;
};

const steps: StepT[] = [
  {
    label: "Update Email",
    content: "?",
  },
  {
    label: "Verify Email",
    content: "✕",
  },
];

type State = {
  currentStep: {
    index: number;
    content: TStepContent;
  };
  verifyEmail: string | null;
  steps: StepT[];
};
type Actions = {
  updateStep: (index: number, content: TStepContent) => void;
  updateVerifyEmail: (email: string) => void;
};
const initialState: State = {
  currentStep: {
    index: 0,
    content: "?",
  },
  verifyEmail: null,
  steps,
};

export const useVerifyStore = create<State & Actions>()((set) => ({
  ...initialState,
  updateStep(index, content) {
    set((state) => {
      const newSteps = state.steps.map((step, i) => {
        if (i < index) {
          step.content = "✓";
        }
        return step;
      });
      return { currentStep: { index, content }, steps: newSteps };
    });
  },
  updateVerifyEmail(email) {
    set({ verifyEmail: email });
  },
}));
