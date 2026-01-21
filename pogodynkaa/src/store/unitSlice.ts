import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TemperatureUnit = "C" | "F" | "K";

export interface UnitState {
  temperatureUnit: TemperatureUnit;
}

const STORAGE_KEY = "pogodynka-unit";

const loadInitialUnit = (): TemperatureUnit => {
  if (typeof window === "undefined") return "C";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "C" || stored === "F" || stored === "K") return stored;
  return "C";
};

const initialState: UnitState = {
  temperatureUnit: loadInitialUnit()
};

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setUnit(state, action: PayloadAction<TemperatureUnit>) {
      state.temperatureUnit = action.payload;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, action.payload);
      }
    }
  }
});

export const { setUnit } = unitSlice.actions;
export const unitReducer = unitSlice.reducer;

