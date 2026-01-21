import React from 'react';
import { Cloud, CloudRain, CloudLightning, Sun, CloudSun, Wind, Snowflake, Search, Star, ArrowLeft, Thermometer, Droplets, Gauge } from 'lucide-react';

const WeatherIcon = ({ icon, className = "w-8 h-8" }) => {
    switch (icon) {
        case 'sun': return <Sun className={className} />;
        case 'cloud-sun': case 'partly-cloudy': return <CloudSun className={className} />;
        case 'cloud': return <Cloud className={className} />;
        case 'rain': case 'cloud-rain': return <CloudRain className={className} />;
        case 'cloud-lightning': return <CloudLightning className={className} />;
        case 'wind': return <Wind className={className} />;
        case 'snowflake': return <Snowflake className={className} />;
        default: return <CloudSun className={className} />;
    }
};

export default WeatherIcon;
