import { create } from "zustand";

type CardStore = {
  inViewCard: string | null;
  setInViewCard: (card: string | null) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  inViewCard: null,
  setInViewCard: (card: string | null) => set({ inViewCard: card }),
}));
