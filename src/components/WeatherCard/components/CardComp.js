import React from "react";

export default class CardComp extends React.Component {

     
    render() {
        

      const { weatherData } = this.props

        return(
            <div className="container">
                <div className="city-card">

                    <div className="card-head">OpenWeather API</div>

                    <div className="city-name">
                        {weatherData ? weatherData.name : 'city not found'}
                    </div>
                    <div className="city-temp">
                        {weatherData ? 'TEMPERATURE: ' + Math.round(weatherData.main.temp-273) : 'temperature not found'}
                    </div>
                    <div className="feels-like">
                        {weatherData ? 'TEMPERATURE: ' + Math.round(weatherData.main.feels_like-273) : ''}
                    </div>
                    
                </div>
            </div>
        )
    }
}