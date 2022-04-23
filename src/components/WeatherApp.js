import React, {useState} from 'react';
const api = {
    key: "f4c85f6be4ce4b3bcea63b33475f1641",
    base: "https://api.openweathermap.org/data/2.5/"
}

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result);
                    setCity('');
                });
        }
    }
    const showDate = () => {
        let d = new Date();
        let date = d.getDate();
        let year = d.getFullYear();
        let month = d.toLocaleString('default', {month: 'long'});
        let day = d.toLocaleString('default', {weekday: 'long'});
        return `${day} ${date} ${month} ${year}`;
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="app__search-box">
                    <input type="text" className="app__search-bar" placeholder="Search..."
                           value={city}
                           onChange={e => setCity(e.target.value)}
                           onKeyPress={getWeather}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div className='weather'>
                        <div className="weather__box">
                            <div className="weather__box-location">{weather.name}, {weather.sys.country}</div>
                            <div className="weather__box-date">{showDate()}</div>
                        </div>
                        <div className="weather__data">
                            <div className="weather__data-temp">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className="weather__data-main">{weather.weather[0].main}</div>
                        </div>

                    </div>
                ) : (
                    <div className='message'> Welcome! Please enter in a city!</div>
                )}
            </main>
        </div>
    );
};

export default WeatherApp;