import React from "react";

export default class CardComp extends React.Component {
    render() {
      const { weatherData } = this.props
        return(
            <div className="container">
                <div className="city-card">

                    <div className="card-head">OpenWeather API</div>

                    <div className="city-name">
                        {weatherData ? weatherData.name : ''}
                    </div>
                    <div className="city-temp">
                        {weatherData ? weatherData.main.temp : ''}
                    </div>
                    <div className="feels-like">
                        {weatherData ? weatherData.main.feels_like : ''}
                    </div>
                    
                </div>
            </div>
        )
    }
}