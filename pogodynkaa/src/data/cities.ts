export type PrecipitationType = "Brak" | "Deszcz" | "Śnieg" | "Mrzawka";

export interface DailyForecast {
  dayLabel: string;
  minTempC: number;
  maxTempC: number;
  icon: string;
}

export interface CityWeather {
  id: string;
  name: string;
  description: string;
  temperatureC: number;
  cloudinessPercent: number;
  precipitationChancePercent: number;
  precipitationType: PrecipitationType;
  precipitationAmountMm: number;
  windSpeedKmh: number;
  windDirection: string;
  icon: string;
  daily: DailyForecast[];
}

export const citiesWeather: CityWeather[] = [
  {
    id: "wroclaw",
    name: "Wrocław",
    description: "Słonecznie",
    temperatureC: 23,
    cloudinessPercent: 10,
    precipitationChancePercent: 5,
    precipitationType: "Brak",
    precipitationAmountMm: 0,
    windSpeedKmh: 9,
    windDirection: "SE",
    icon: "☀️",
    daily: [
      { dayLabel: "Dziś", minTempC: 15, maxTempC: 23, icon: "☀️" },
      { dayLabel: "Jutro", minTempC: 14, maxTempC: 22, icon: "🌤️" },
      { dayLabel: "Śr", minTempC: 13, maxTempC: 21, icon: "🌤️" },
      { dayLabel: "Czw", minTempC: 12, maxTempC: 20, icon: "🌥️" },
      { dayLabel: "Pt", minTempC: 13, maxTempC: 24, icon: "☀️" }
    ]
  },
  {
    id: "warszawa",
    name: "Warszawa",
    description: "Pochmurnie",
    temperatureC: 19,
    cloudinessPercent: 92,
    precipitationChancePercent: 40,
    precipitationType: "Deszcz",
    precipitationAmountMm: 3,
    windSpeedKmh: 18,
    windDirection: "W",
    icon: "☁️",
    daily: [
      { dayLabel: "Dziś", minTempC: 13, maxTempC: 19, icon: "☁️" },
      { dayLabel: "Jutro", minTempC: 12, maxTempC: 18, icon: "🌧️" },
      { dayLabel: "Śr", minTempC: 11, maxTempC: 17, icon: "🌥️" },
      { dayLabel: "Czw", minTempC: 10, maxTempC: 18, icon: "☁️" },
      { dayLabel: "Pt", minTempC: 12, maxTempC: 20, icon: "🌦️" }
    ]
  },
  {
    id: "krakow",
    name: "Kraków",
    description: "Przelotne opady",
    temperatureC: 17,
    cloudinessPercent: 75,
    precipitationChancePercent: 70,
    precipitationType: "Deszcz",
    precipitationAmountMm: 6,
    windSpeedKmh: 22,
    windDirection: "SW",
    icon: "🌦️",
    daily: [
      { dayLabel: "Dziś", minTempC: 11, maxTempC: 17, icon: "🌦️" },
      { dayLabel: "Jutro", minTempC: 10, maxTempC: 16, icon: "🌧️" },
      { dayLabel: "Śr", minTempC: 9, maxTempC: 17, icon: "🌥️" },
      { dayLabel: "Czw", minTempC: 10, maxTempC: 18, icon: "🌦️" },
      { dayLabel: "Pt", minTempC: 11, maxTempC: 19, icon: "🌦️" }
    ]
  },
  {
    id: "gdansk",
    name: "Gdańsk",
    description: "Wietrznie",
    temperatureC: 16,
    cloudinessPercent: 60,
    precipitationChancePercent: 20,
    precipitationType: "Mrzawka",
    precipitationAmountMm: 0.4,
    windSpeedKmh: 35,
    windDirection: "NW",
    icon: "🌬️",
    daily: [
      { dayLabel: "Dziś", minTempC: 10, maxTempC: 16, icon: "🌬️" },
      { dayLabel: "Jutro", minTempC: 9, maxTempC: 15, icon: "🌥️" },
      { dayLabel: "Śr", minTempC: 8, maxTempC: 16, icon: "🌦️" },
      { dayLabel: "Czw", minTempC: 9, maxTempC: 17, icon: "🌬️" },
      { dayLabel: "Pt", minTempC: 10, maxTempC: 18, icon: "🌤️" }
    ]
  },
  {
    id: "poznan",
    name: "Poznań",
    description: "Częściowe zachmurzenie",
    temperatureC: 21,
    cloudinessPercent: 45,
    precipitationChancePercent: 15,
    precipitationType: "Brak",
    precipitationAmountMm: 0,
    windSpeedKmh: 14,
    windDirection: "S",
    icon: "🌤️",
    daily: [
      { dayLabel: "Dziś", minTempC: 14, maxTempC: 21, icon: "🌤️" },
      { dayLabel: "Jutro", minTempC: 13, maxTempC: 22, icon: "☀️" },
      { dayLabel: "Śr", minTempC: 13, maxTempC: 23, icon: "🌤️" },
      { dayLabel: "Czw", minTempC: 14, maxTempC: 24, icon: "🌤️" },
      { dayLabel: "Pt", minTempC: 15, maxTempC: 25, icon: "☀️" }
    ]
  }
];

