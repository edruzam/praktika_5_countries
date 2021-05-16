import React, { Component } from "react";
import axios from 'axios';

export default class Country extends Component {
    state = {
        country: '',
        country_info: []
    };

    readData() {
        this.setState({ country: this.props.match.params.country })
        axios.get(`http://localhost:3000/api/countrybynamewithcapital/${this.props.match.params.country}`)
            .then(res => {
                this.setState({ country_info: res.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        this.readData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.country !== this.props.match.params.country) {
            this.readData()
        }
    }
    render() {
        const { country, country_info } = this.state;
        if (country_info.length === 0) {
            return (
                <div>
                    <h1>Country: {country}</h1>
                    <div>No data</div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Country: {country}</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 fw-bold">Country Code:</div>
                            <div className="col-md-6">{country_info[0].country_code}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Continent:</div>
                            <div className="col-md-6">{country_info[0].continent}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Region:</div>
                            <div className="col-md-6">{country_info[0].region}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Year of Independence:</div>
                            <div className="col-md-6">{country_info[0].indepyear}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Population:</div>
                            <div className="col-md-6">{country_info[0].country_population}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Life Expectancy:</div>
                            <div className="col-md-6">{country_info[0].lifeexpectancy}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">GNP:</div>
                            <div className="col-md-6">{country_info[0].gnp}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">GNP old:</div>
                            <div className="col-md-6">{country_info[0].gnpold}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Local Name:</div>
                            <div className="col-md-6">{country_info[0].localname}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Government Form:</div>
                            <div className="col-md-6">{country_info[0].governmentform}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Head of State:</div>
                            <div className="col-md-6">{country_info[0].headofstate}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Country Code 2:</div>
                            <div className="col-md-6">{country_info[0].code2}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Capital:</div>
                            <div className="col-md-6">{country_info[0].city_name}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Capital's District:</div>
                            <div className="col-md-6">{country_info[0].city_district}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 fw-bold">Capital Population:</div>
                            <div className="col-md-6">{country_info[0].city_population}</div>
                        </div>
                    </div>
                    <br /><br />
                    <p><a className="nav-link" href={`/continent/${country_info[0].continent}`}>Back to {country_info[0].continent}</a></p>
                </div>    
            );
        }
    }
}
