import create from "zustand";

const useStore = create((set) => ({
  granularity: 1,
  setGranularity: (granularity) =>
    set((state) => ({ ...state, granularity: granularity })),
}));

export default useStore;
