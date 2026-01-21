import React from 'react';
import { useSelector } from 'react-redux';
import CityCard from '../components/CityCard';

const Favorites = () => {
    const allCities = useSelector((state) => state.weather.cities);
    const favoriteIds = useSelector((state) => state.favorites.items);

    const favoriteCities = allCities.filter(city => favoriteIds.includes(city.id));

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="py-6">
                <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm">
                    Ulubione Miejsca
                </h1>
                <p className="text-white/70 mt-2 text-lg">
                    Twoje zapisane lokalizacje.
                </p>
            </header>

            {favoriteCities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favoriteCities.map(city => (
                        <CityCard key={city.id} city={city} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <p className="text-xl text-white/60 mb-2">Brak ulubionych miast.</p>
                    <p className="text-sm text-white/40">Dodaj miasta do ulubionych, aby widzieć je tutaj.</p>
                </div>
            )}
        </div>
    );
};

export default Favorites;
