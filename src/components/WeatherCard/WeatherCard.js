import React from "react";
import CardComp from "./components/CardComp";
import FormComp from "./components/FormComp";
import { getDataWeatherApi } from "./getDataWeatherApi";

export default class WeatherCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: '',
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    async handleSearch(value) {
      const data = await getDataWeatherApi(value);
      this.setState({weatherData: data})
    }


    render() {
        return(
            <div>
               <FormComp onSearch = {this.handleSearch}/>
               <CardComp weatherData = {this.state.weatherData} />
            </div>
        )
    }
}