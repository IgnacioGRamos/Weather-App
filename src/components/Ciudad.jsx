import React from "react";
import './ciudad.css'


export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2 className="data">{city.name}</h2>
                    <div className="info">
                        <div className="data">Temperatura: {city.temp} ºC</div>
                        <div className="data">Clima: {city.weather}</div>
                        <div className="data">Viento: {city.wind} km/h</div>
                        <div className="data">Cantidad de nubes: {city.clouds}</div>
                        <div className="data">Latitud: {city.latitud}º</div>
                        <div className="data">Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}