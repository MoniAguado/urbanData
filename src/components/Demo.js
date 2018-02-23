import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Area from './Area';
import Carto from './Carto';
import Income from './Income';
import Salestime from './Salestime';
import Services from './Services';
import data from '../token.json';

const renderSuggestion = ({ formattedSuggestion }) => (
  <div className="Demo__suggestion-item">
    <i className="fa fa-map-marker Demo__suggestion-icon" />
    <strong>{formattedSuggestion.mainText}</strong>{' '}
    <small className="text-muted">{formattedSuggestion.secondaryText}</small>
  </div>
)

const shouldFetchSuggestions = ({ value }) => value.length > 2

const onError = (status, clearSuggestions) => {
  console.log(
    'Error happened while fetching suggestions from Google Maps API',
    status
  )
  clearSuggestions()
}


class Demo extends Component{
	constructor(props) {
    super(props);
    this.state = {
      address: '',
      geocodeResults: null,
			priceMun: [],
			priceNeighborhood :[]

    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.getinputValue = this.getinputValue.bind(this);
  }
	getinputValue() {
	  this.handleSelect(document.querySelector('#addressInput').value);
	  }
		handleSelect(address) {
	    this.setState({
	      address: address
	    })
	    geocodeByAddress(address)
	      .then(results => getLatLng(results[0]))
	      .then(({lng, lat}) => {
	        console.log('Geocode Success', { lng, lat })
	        this.getResultsArea(lng, lat)
	      })
			}

	  handleChange(address) {
	    this.setState({
	      address,
	      geocodeResults: null
	    })
	  }
		getKeyNumber(Obj,index) {
			const item = Object.keys(Obj);
			return item[index];
		}

		getResultsArea(lng, lat) {
			let url = `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[${lng},${lat}]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1`;

			let headers = new Headers();
			headers.append('Authorization', 'Token ' + data.token);
			fetch(url, { method:'GET',
			headers: headers
			})
			.then(response => response.json())
			.then(json => {
				let priceMun = [];
				let priceNeighborhood = [];
				for (let i=1; i<= 3 ; i++) {
					 const priceM = json["2017Q" + i][this.getKeyNumber(json["2017Q" + i],0)]["1"]["o_pu"];
					 console.log(priceM);
					 priceMun.push(priceM);
					 const priceN = json["2017Q" + i][this.getKeyNumber(json["2017Q" + i],1)]["1"]["o_pu"];
					 console.log(priceN);
					 priceNeighborhood.push(priceN);
					};
					console.log(priceMun);
					console.log(priceNeighborhood);
					this.setState({
					priceNeighborhood : priceNeighborhood,
					priceMun : priceMun
				})
			})
		}

	render(){
		const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Calle Sagasta 5, Madrid',
      name: 'Demo__input',
      id: 'addressInput',
			className: 'demo__input controls',
    }

		return(
			<section className="demo" id="demoSection">
				<div className="block__container">

					<span className="demo__span--logo">
						<h2 className="demo__title">HAZ UNA PRUEBA</h2>
					</span>
					<h3 className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</h3>
					<div className="demo__form">
						<div className="demo__search">
							<PlacesAutocomplete
								renderSuggestion={renderSuggestion}
								inputProps={inputProps}
								onClick={this.handleSelect}
								onEnterKeyDown={this.handleSelect}
								onError={onError}
								shouldFetchSuggestions={shouldFetchSuggestions}
							/>
							<button type="button" className="button button--search" onClick={this.getinputValue}>BUSCAR</button>
						</div>

						<Area city={this.state.priceMun} neighborhood={this.state.priceNeighborhood}/>
						<div className="carto-graphics">
							<Carto />
							<div className="income-sales">
								<Income />
								<Salestime />
							</div>
							<Services />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Demo;
