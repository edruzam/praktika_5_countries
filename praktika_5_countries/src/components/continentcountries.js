import React, { Component } from "react";
import axios from 'axios';

export default class ContinentCountries extends Component {
    state = {
        continent_name: '',
        countries: []
    };

    readData() {
        this.setState({ continent_name: this.props.match.params.name })
        axios.get(`http://localhost:3000/api/continent/${this.props.match.params.name}/countries`)
            .then(res => {
                this.setState({ countries: res.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        this.readData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.readData()
        }
    }
    render() {
        const { continent_name, countries } = this.state;
        if (countries.length === 0) {
            return (
                <div>
                    <h1>Continent: {continent_name}</h1>
                    <div>No data</div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Continent: {continent_name}</h1>
                    <ul className="list-group">
                        {countries.map(c => (
                            <li className="list-group-item" key={c.code}>
                                {c.country}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
