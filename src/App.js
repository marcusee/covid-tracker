import React, { useEffect, useState } from 'react';
import './App.css';
import "leaflet/dist/leaflet.css";
import { FormControl, Select, MenuItem, CardContent , Card } from "@material-ui/core";
import numeral from 'numeral'
import InfoBox from './components/InfoBox'
import CovidMap from './components/CovidMap';
import Table from './components/Table';
import LineGraph from './components/LineGraph';

import { prettyPrintStat } from './utils'
import GraphContainer from './components/GraphContainer';


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    console.log("get all");
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then((data) => {
        setCountryInfo(data)
      });
  }, [])

  useEffect(() => {
    // The code inside here
    console.log("getCountriesData");
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }))
          console.log("getCountriesData" , data);
          setTableData(data);
          setMapCountries(data);
          setCountries(countries);
        });
    }

    getCountriesData();
    return () => {
    }
  }, [])

  return (
    <div className="app">
      <div>
        {/** Header */}
        {/** Title + Select input dropdown field */}
        <div className="app__header">
          <h1>COVID 19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={async (event) => {
                const countryCode = event.target.value;

                const url = countryCode === 'worldwide'
                  ? "https://disease.sh/v3/covid-19/all"
                  : `https://disease.sh/v3/covid-19/countries/${countryCode}`

                //

                fetch(url).then(resp => resp.json()).then(data => {
                  setCountry(countryCode);
                  setCountryInfo(data);
                  setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                  setMapZoom(4);

                })

                console.log(countryInfo)

              }}
            >
              <MenuItem value={country}>World wide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            onClick={(e) => { setCasesType("cases"); console.log("HI") }}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>

        <div className="app__graph">
          <GraphContainer casesType={casesType}/>
        </div>
        
        <CovidMap 
          mapCountries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />

        <Table casesType={casesType} tableData={tableData} />

      </div>
    </div>
  );
}

export default App;
