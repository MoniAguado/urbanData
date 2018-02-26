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
		<i className="fas fa-map-marker-alt Demo__suggestion-icon"></i>
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
			priceMun: '',
			priceNeighbourhood :'',
			homeIncomeNeighbourhood: '',
			homeIncomeMun: '',
			timeNeighbourhood: '',
			timeDistrict: '',
			key_schools: '',
			key_daycare: '',
			key_parking: '',
			key_transport: ''
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
			this.getResultsArea(lng, lat);
			this.getResultsIncome(lng,lat);
			this.getResultsSalesTime(lng, lat);
			this.getResultsServices(lng,lat);
		})
	}
	handleChange(address) {
		this.setState({
			address
		})
	}
	getKeyNumber(Obj,index) {
		const item = Object.keys(Obj);
		return item[index];
	}
	getResultsArea(lng, lat) {
		let url = `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[${lng},${lat}]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1,2016Q3,2016Q2,2016Q1,2015Q3,2015Q2,2015Q1`;
		let headers = new Headers();
		headers.append('Authorization', 'Token ' + data.token);
		fetch(url, { method:'GET',
		headers: headers
	})
	.then(response => response.json())
	.then(json => {
		let priceMun = [];
		let priceNeighbourhood = [];
		for (let i=1; i<= 3 ; i++) {
			const priceM = json["2017Q" + i][this.getKeyNumber(json["2017Q" + i],0)]["1"]["o_pu"];
			priceMun.push(priceM);
			const priceN = json["2017Q" + i][this.getKeyNumber(json["2017Q" + i],1)]["1"]["o_pu"];
			priceNeighbourhood.push(priceN);
		};
		for (let i=1; i<= 3 ; i++) {
			const priceM = json["2016Q" + i][this.getKeyNumber(json["2016Q" + i],0)]["1"]["o_pu"];
			priceMun.push(priceM);
			const priceN = json["2016Q" + i][this.getKeyNumber(json["2016Q" + i],1)]["1"]["o_pu"];
			priceNeighbourhood.push(priceN);
		};
		for (let i=1; i<= 3 ; i++) {
			const priceM = json["2015Q" + i][this.getKeyNumber(json["2015Q" + i],0)]["1"]["o_pu"];
			priceMun.push(priceM);
			const priceN = json["2015Q" + i][this.getKeyNumber(json["2015Q" + i],1)]["1"]["o_pu"];
			priceNeighbourhood.push(priceN);
		};
		this.setState({
			priceNeighbourhood : priceNeighbourhood,
			priceMun : priceMun
		})
	})
}
getResultsIncome(lng, lat) {
	let url = `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=renthog_06_13_M&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[${lng},${lat}]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3`;
	let headers = new Headers();
	headers.append('Authorization', 'Token ' + data.token);
	fetch(url, {method:'GET',
	headers: headers
})
.then(response => response.json())
.then(json => {
	const income =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["renthog_06_13_M"]["0"];
	this.setState({
		homeIncomeNeighbourhood: income
	})
})
}
getResultsSalesTime(lng, lat){
	let url = `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=s_t&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[${lng},${lat}]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3`;
	let headers = new Headers();
	headers.append('Authorization', 'Token ' + data.token);
	fetch(url, {method:'GET',
	headers: headers
})
.then(response => response.json())
.then(json => {
	const districtC =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["1"]["s_t"];
	const neighbourhoodC =
	json["2017Q3"][this.getKeyNumber(json["2017Q3"],1)]["1"]["s_t"];
	this.setState({
		timeNeighbourhood: neighbourhoodC,
		timeDistrict: districtC
	})
})
}
getResultsServices(lng, lat){
	let url = `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=PA_EDU_C,PA_EDU_G,PA_P,PA_TP&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[${lng},${lat}]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3`;
	let headers = new Headers();
	headers.append('Authorization', 'Token ' + data.token);
	fetch(url, {method:'GET',
	headers: headers
})
.then(response => response.json())
.then(json => {
	const schools =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["PA_EDU_C"];
	const daycare =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["PA_EDU_G"];
	const parkings =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["PA_P"];
	const transport =  json["2017Q3"][this.getKeyNumber(json["2017Q3"],0)]["PA_TP"];
	this.setState({
		key_schools: schools,
		key_daycare: daycare,
		key_parking: parkings,
		key_transport: transport
	})
})
}
render(){
	const inputProps = {
		type: 'text',
		value: this.state.address,
		onChange: this.handleChange,
		autoFocus: false,
		placeholder: 'Calle Almagro 22,  Madrid',
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
				<p className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</p>
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
					<Area city={this.state.priceMun} neighborhood={this.state.priceNeighbourhood}/>
					<div className="carto-graphics">
						<Carto />
						<div className="income-sales">
							<Income incomeNeighborhood={this.state.homeIncomeNeighbourhood} />
							<Salestime salesTimeDistrict={this.state.timeDistrict} salesTimeNeighbourhood={this.state.timeNeighbourhood} />
						</div>
						<Services servicesSchools={this.state.key_schools} servicesDaycare={this.state.key_daycare} servicesParkings={this.state.key_parking} servicesTransport={this.state.key_transport}/>
					</div>
				</div>
			</div>
		</section>
	);
}
}
export default Demo;
