import { Player } from "types";
import { create } from "zustand";

interface PlayerState {
  player: Player | null
  setPlayer: (player: Player) => void
}

export const usePlayerStore = create<PlayerState>(set => ({
  player: null,
  setPlayer: (player) => set({player})
}))