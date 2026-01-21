import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassPanel from './GlassPanel';
import WeatherIcon from './WeatherIcon';
import { useSelector } from 'react-redux';
import { convertTemp, getUnitLabel } from '../utils/helpers';

const CityCard = ({ city }) => {
    const navigate = useNavigate();
    const unit = useSelector((state) => state.settings.unit);

    const displayTemp = convertTemp(city.current.temp, unit);
    const unitLabel = getUnitLabel(unit);

    return (
        <GlassPanel
            className="flex items-center justify-between cursor-pointer hover:bg-white/30 hover:scale-[1.02] active:scale-95"
            onClick={() => navigate(`/city/${city.id}`)}
        >
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight">{city.name}</h3>
                <span className="text-sm opacity-80 font-medium">{city.current.condition}</span>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-4xl font-light">
                    {displayTemp}{unitLabel}
                </span>
                <WeatherIcon icon={city.current.icon} className="w-10 h-10 drop-shadow-md" />
            </div>
        </GlassPanel>
    );
};

export default CityCard;
