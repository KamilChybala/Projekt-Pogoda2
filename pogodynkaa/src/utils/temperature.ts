import { TemperatureUnit } from "../store/unitSlice";

export const convertTemperature = (valueC: number, to: TemperatureUnit): number => {
  if (to === "C") return valueC;
  if (to === "F") return valueC * (9 / 5) + 32;
  return valueC + 273.15;
};

export const formatTemperature = (valueC: number, unit: TemperatureUnit): string => {
  const v = convertTemperature(valueC, unit);
  const rounded = Math.round(v);
  const symbol = unit === "C" ? "°C" : unit === "F" ? "°F" : "K";
  return `${rounded}${symbol}`;
};

