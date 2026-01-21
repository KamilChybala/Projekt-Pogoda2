import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FavoritesState {
  ids: string[];
}

const STORAGE_KEY = "pogodynka-favorites";

const loadInitialFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((x) => typeof x === "string");
    }
    return [];
  } catch {
    return [];
  }
};

const saveFavorites = (ids: string[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

const initialState: FavoritesState = {
  ids: loadInitialFavorites()
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((x) => x !== id);
      } else {
        state.ids.push(id);
      }
      saveFavorites(state.ids);
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

