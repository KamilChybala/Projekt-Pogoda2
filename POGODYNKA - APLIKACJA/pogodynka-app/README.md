# Pogodynka - Aplikacja Pogodowa

Aplikacja pogodowa stworzona w React + Vite, wykorzystująca estetykę "Clear Water" (Glassmorphism).

## Funkcjonalności

- **Estetyka**: Smooth gradienty, Glassmorphism (`backdrop-blur-xl`, `bg-white/20`), minimalistyczna biała typografia.
- **Ekran Główny**:
  - Lista miast (mock data).
  - Wyszukiwarka filtrująca w czasie rzeczywistym.
  - Przełącznik widoku (Siatka / Lista) obsługiwany przez `useReducer`.
  - Globalna zmiana jednostek (C, F, K).
- **Widok Szczegółowy**:
  - Aktualna temperatura, wiatr, opady (prawdopodobieństwo, ilość, rodzaj), zachmurzenie.
  - Prognoza na 5 dni.
  - Dodawanie do ulubionych.
  - Dynamiczny tytuł strony (`useEffect`).
- **Ulubione**:
  - Osobna podstrona z zapisanymi miastami.
- **Persistence**:
  - Zapisywanie jednostek i ulubionych w `localStorage` (Redux Middleware).

## Technologie

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS, Lucide React (ikony)
- **Routing**: React Router DOM v7

## Uruchomienie

1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
3. Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

## Struktura Katalogów

- `src/components` - Reużywalne komponenty (GlassPanel, CityCard, itp.)
- `src/pages` - Widoki (Home, Details, Favorites)
- `src/store` - Konfiguracja Redux (Slices, Middleware)
- `src/utils` - Mock data i funkcje pomocnicze
