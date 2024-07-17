import { create } from "zustand";
import { createStore } from "zustand/vanilla";

export type CounterState = {
   count: number;
};

export type CounterActions = {
   decrementCount: () => void;
   incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
   count: 0,
};

export const useCounterStore = create<CounterStore>((set) => ({
   ...defaultInitState,
   incrementCount: () => set((state) => ({ count: state.count + 1 })),
   decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));
