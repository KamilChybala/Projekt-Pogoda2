
export const MOCK_CITIES = [
    {
        id: 'warsaw',
        name: 'Warszawa',
        current: {
            temp: 18,
            condition: 'Częściowe zachmurzenie',
            icon: 'cloud-sun',
            cloudiness: 40,
            rainProb: 10,
            rainType: 'Brak',
            rainAmount: 0,
            windSpeed: 15,
            windDir: 'NW',
        },
        forecast: [
            { date: '2023-10-25', temp: 19, icon: 'sun' },
            { date: '2023-10-26', temp: 17, icon: 'cloud-rain' },
            { date: '2023-10-27', temp: 16, icon: 'cloud' },
            { date: '2023-10-28', temp: 18, icon: 'sun' },
            { date: '2023-10-29', temp: 20, icon: 'sun' },
        ]
    },
    {
        id: 'krakow',
        name: 'Kraków',
        current: {
            temp: 15,
            condition: 'Deszcz',
            icon: 'cloud-rain',
            cloudiness: 80,
            rainProb: 70,
            rainType: 'Deszcz',
            rainAmount: 5.2,
            windSpeed: 10,
            windDir: 'W',
        },
        forecast: [
            { date: '2023-10-25', temp: 16, icon: 'cloud-rain' },
            { date: '2023-10-26', temp: 14, icon: 'cloud-lightning' },
            { date: '2023-10-27', temp: 15, icon: 'cloud' },
            { date: '2023-10-28', temp: 17, icon: 'partly-cloudy' },
            { date: '2023-10-29', temp: 18, icon: 'sun' },
        ]
    },
    {
        id: 'gdansk',
        name: 'Gdańsk',
        current: {
            temp: 14,
            condition: 'Wietrznie',
            icon: 'wind',
            cloudiness: 60,
            rainProb: 20,
            rainType: 'Mżawka',
            rainAmount: 0.5,
            windSpeed: 35,
            windDir: 'N',
        },
        forecast: [
            { date: '2023-10-25', temp: 13, icon: 'wind' },
            { date: '2023-10-26', temp: 12, icon: 'cloud' },
            { date: '2023-10-27', temp: 14, icon: 'sun' },
            { date: '2023-10-28', temp: 15, icon: 'sun' },
            { date: '2023-10-29', temp: 14, icon: 'cloud' },
        ]
    },
    {
        id: 'wroclaw',
        name: 'Wrocław',
        current: {
            temp: 20,
            condition: 'Słonecznie',
            icon: 'sun',
            cloudiness: 10,
            rainProb: 0,
            rainType: 'Brak',
            rainAmount: 0,
            windSpeed: 5,
            windDir: 'S',
        },
        forecast: [
            { date: '2023-10-25', temp: 21, icon: 'sun' },
            { date: '2023-10-26', temp: 22, icon: 'sun' },
            { date: '2023-10-27', temp: 19, icon: 'cloud' },
            { date: '2023-10-28', temp: 18, icon: 'cloud-rain' },
            { date: '2023-10-29', temp: 17, icon: 'cloud' },
        ]
    },
    {
        id: 'zakopane',
        name: 'Zakopane',
        current: {
            temp: 8,
            condition: 'Śnieg',
            icon: 'snowflake',
            cloudiness: 90,
            rainProb: 80,
            rainType: 'Śnieg',
            rainAmount: 10,
            windSpeed: 20,
            windDir: 'SW',
        },
        forecast: [
            { date: '2023-10-25', temp: 7, icon: 'snowflake' },
            { date: '2023-10-26', temp: 5, icon: 'snowflake' },
            { date: '2023-10-27', temp: 4, icon: 'cloud' },
            { date: '2023-10-28', temp: 6, icon: 'sun' },
            { date: '2023-10-29', temp: 8, icon: 'sun' },
        ]
    },
    {
        id: 'poznan',
        name: 'Poznań',
        current: {
            temp: 17,
            condition: 'Pochmurno',
            icon: 'cloud',
            cloudiness: 75,
            rainProb: 15,
            rainType: 'Brak',
            rainAmount: 0,
            windSpeed: 12,
            windDir: 'W',
        },
        forecast: [
            { date: '2023-10-25', temp: 17, icon: 'cloud' },
            { date: '2023-10-26', temp: 16, icon: 'cloud-sun' },
            { date: '2023-10-27', temp: 15, icon: 'rain' },
            { date: '2023-10-28', temp: 16, icon: 'cloud' },
            { date: '2023-10-29', temp: 18, icon: 'sun' },
        ]
    }
];
