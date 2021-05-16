import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import ContinentCountries from './components/continentcountries'
import Country from './components/country'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/continents')
      .then(res => {
        this.setState({ continents: res.data.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const { continents } = this.state;
    console.log(continents)
    return (
      <Router>
        <div className="App">
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand">Continents: </a>
              <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {continents.map(c => (
                    <li className="nav-item" key={c.continent}>
                      <Link className="nav-link" to={`/continent/${c.continent}`}>{c.continent}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Switch>
                  <Route path="/continent/:name" component={ContinentCountries} />
                  <Route path="/countrybyname/:country" component={Country} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
