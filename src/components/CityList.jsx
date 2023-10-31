import React from 'react';

const cities = [
    { name: 'Paris', lat: 48.864716, lon: 2.349014 },
    { name: 'New York City', lat: 40.730610, lon: -73.935242},
    { name: 'London', lat: 51.509865, lon: -0.118092},
    { name: 'Mumbai', lat: 19.076090, lon: 72.877426},
    { name: 'Tokyo', lat: 35.652832, lon: 139.839478},
  ];

  //Functional componenet
  const CityList = ({ onCityClick}) => {
    return (
        <div className='cityList'>
            <h2> List of Cities </h2>

            <ul>
                {cities.map((city) =>
                (<li key={city.name}>
                <button onClick={() => onCityClick(city)}>{city.name}</button>
                </li>
                
                ))}
            </ul>
        </div>

    );
  };

  export default CityList;
