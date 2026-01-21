import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import CityCard from '../components/CityCard';
import SearchBar from '../components/SearchBar';
import UnitToggle from '../components/UnitToggle';
import { clsx } from 'clsx';

const Home = () => {
    const cities = useSelector((state) => state.weather.cities);
    const [searchTerm, setSearchTerm] = useState('');

    // Requirement: useReducer for managing view state
    const viewReducer = (state, action) => {
        switch (action.type) {
            case 'SET_GRID': return 'grid';
            case 'SET_LIST': return 'list';
            case 'TOGGLE': return state === 'grid' ? 'list' : 'grid';
            default: return state;
        }
    };

    const [viewMode, dispatchView] = React.useReducer(viewReducer, 'grid');

    const handleSearchChange = useCallback((value) => {
        setSearchTerm(value);
    }, []);

    const filteredCities = useMemo(() => {
        return cities.filter(city =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [cities, searchTerm]);

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="flex flex-col gap-4 text-center items-center py-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                    Znajdź swoje miasto
                </h1>
                <p className="text-white/70 max-w-md text-lg">
                    Sprawdź pogodę w ulubionych miejscach z najwyższą dokładnością.
                </p>
            </header>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="w-full max-w-md">
                    <SearchBar value={searchTerm} onChange={handleSearchChange} />
                </div>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => dispatchView({ type: 'TOGGLE' })}
                        className="text-white/70 hover:text-white transition-colors text-sm font-medium bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md border border-white/20"
                    >
                        {viewMode === 'grid' ? 'Widok listy' : 'Widok siatki'}
                    </button>
                    <UnitToggle />
                </div>
            </div>

            <div className={clsx(
                "grid gap-4",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            )}>
                {filteredCities.map(city => (
                    <CityCard key={city.id} city={city} />
                ))}
                {filteredCities.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-12 text-white/50">
                        Nie znaleziono miast pasujących do wyszukiwania.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
