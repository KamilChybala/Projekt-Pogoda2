export const convertTemp = (tempC, unit) => {
    if (unit === 'F') return Math.round((tempC * 9 / 5) + 32);
    if (unit === 'K') return Math.round(tempC + 273.15);
    return Math.round(tempC);
};

export const getUnitLabel = (unit) => {
    if (unit === 'F') return '°F';
    if (unit === 'K') return ' K';
    return '°C';
};
