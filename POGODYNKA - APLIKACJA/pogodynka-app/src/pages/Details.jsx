import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';
import { convertTemp, getUnitLabel } from '../utils/helpers';
import GlassPanel from '../components/GlassPanel';
import WeatherIcon from '../components/WeatherIcon';
import ForecastRow from '../components/ForecastRow';
import { ArrowLeft, Star, Wind, CloudRain, Droplets, ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cities = useSelector((state) => state.weather.cities);
    const unit = useSelector((state) => state.settings.unit);
    const favorites = useSelector((state) => state.favorites.items);

    const city = cities.find(c => c.id === id);
    const isFavorite = favorites.includes(id);

    if (!city) {
        return <div className="text-white">City not found</div>;
    }

    useEffect(() => {
        if (city) {
            document.title = `${city.name} - Pogodynka`;
        }
        return () => {
            document.title = 'Pogodynka';
        };
    }, [city]);

    const displayTemp = convertTemp(city.current.temp, unit);
    const unitLabel = getUnitLabel(unit);

    const handleFavoriteToggle = () => {
        dispatch(toggleFavorite(city.id));
    };

    return (
        <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex items-center justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-3xl font-bold text-white">{city.name}</h1>
                <button
                    onClick={handleFavoriteToggle}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <Star
                        className={clsx(
                            "w-8 h-8 transition-all duration-300",
                            isFavorite ? "fill-yellow-400 text-yellow-400 scale-110" : "text-white group-hover:scale-110"
                        )}
                    />
                </button>
            </div>

            {/* Main Weather Display */}
            <GlassPanel className="flex flex-col items-center justify-center py-10 gap-4">
                <WeatherIcon icon={city.current.icon} className="w-24 h-24 drop-shadow-2xl text-white" />
                <div className="flex flex-col items-center">
                    <span className="text-8xl font-thin tracking-tighter text-white">
                        {displayTemp}<span className="text-4xl align-top opacity-60 ml-2">{unitLabel}</span>
                    </span>
                    <span className="text-xl font-medium opacity-80 mt-2">{city.current.condition}</span>
                </div>
            </GlassPanel>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Wind */}
                <GlassPanel className="flex flex-col gap-2 items-center text-center">
                    <div className="p-3 bg-white/10 rounded-full mb-1">
                        <Wind className="w-6 h-6 text-blue-200" />
                    </div>
                    <span className="opacity-60 text-sm font-semibold uppercase tracking-wider">Wiatr</span>
                    <span className="text-xl font-bold">{city.current.windSpeed} km/h</span>
                    <span className="text-sm opacity-70 flex items-center gap-1">
                        {city.current.windDir} <ArrowUpRight className="w-3 h-3" />
                    </span>
                </GlassPanel>

                {/* Rain */}
                <GlassPanel className="flex flex-col gap-2 items-center text-center">
                    <div className="p-3 bg-white/10 rounded-full mb-1">
                        <CloudRain className="w-6 h-6 text-blue-200" />
                    </div>
                    <span className="opacity-60 text-sm font-semibold uppercase tracking-wider">Opady</span>
                    <span className="text-xl font-bold">{city.current.rainProb}%</span>
                    <span className="text-sm opacity-70">
                        {city.current.rainType !== 'Brak' ? `${city.current.rainAmount} mm/m²` : 'Brak opadów'}
                    </span>
                </GlassPanel>

                {/* Cloudiness (Humidity/Cloud icon used for simplicity in mapping or just generic detail) */}
                <GlassPanel className="flex flex-col gap-2 items-center text-center">
                    <div className="p-3 bg-white/10 rounded-full mb-1">
                        <Droplets className="w-6 h-6 text-blue-200" />
                    </div>
                    <span className="opacity-60 text-sm font-semibold uppercase tracking-wider">Zachmurzenie</span>
                    <span className="text-xl font-bold">{city.current.cloudiness}%</span>
                    <span className="text-sm opacity-70">Pokrycie nieba</span>
                </GlassPanel>
            </div>

            {/* 5-Day Forecast */}
            <GlassPanel>
                <h3 className="text-lg font-bold mb-4 ml-2 opacity-90">Prognoza na 5 dni</h3>
                <div className="flex flex-col">
                    {city.forecast.map((day, idx) => (
                        <ForecastRow key={idx} day={day} />
                    ))}
                </div>
            </GlassPanel>
        </div>
    );
};

export default Details;
