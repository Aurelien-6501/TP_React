import React, { useEffect, useState } from 'react';

const URL = 'https://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=Annecy'

function Weather(props) {

    // function Promesse() {
    //     fetch(URL).then(res => res.json().then(data => setTemperature(data)
    //     )
    // );
    // }

    async function getTemperature() {
        const res = await fetch(URL);
        const data = await res.json();
        setTemperature(data);
    }

    useEffect(() => {
        getTemperature();
    }, []);

    const [temperature, setTemperature] = useState(null);

    if(temperature) {
        return (
            <div>
                il fait {temperature.current.temp_c}°C à Annecy       
            </div>
        );
    } else {
        return (
            <div>
                Chargement...
            </div>
        );
    }
    }

export default Weather