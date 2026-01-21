import React from 'react';
import WeatherIcon from './WeatherIcon';
import { convertTemp, getUnitLabel } from '../utils/helpers';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

const ForecastRow = ({ day }) => {
    const unit = useSelector((state) => state.settings.unit);
    const displayTemp = convertTemp(day.temp, unit);

    // Format date to day name (e.g. Poniedziałek)
    const dateObj = new Date(day.date);
    const dayName = format(dateObj, 'EEEE', { locale: pl });
    const readableDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    return (
        <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
            <span className="w-24 font-medium opacity-90">{readableDay}</span>
            <div className="flex gap-4 items-center">
                <WeatherIcon icon={day.icon} className="w-6 h-6 opacity-90" />
                <span className="w-12 text-right font-semibold">{displayTemp}°</span>
            </div>
        </div>
    );
};

export default ForecastRow;
