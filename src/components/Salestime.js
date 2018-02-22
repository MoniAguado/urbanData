import React, { Component } from 'react';

import data from '../token.json';

class Salestime extends Component {
	constructor(props){
		super(props);
		this.state={
			neighbourhood: '',
			district: ''
		}
	}

	componentDidMount(){
		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=s_t&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3';
		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

	fetch(url, {method:'GET',
		headers: headers
	})
		.then(response => response.json())
		.then(json => {
			const districtC =  json["2017Q3"]["72400013000280007900000000000000000000"]["1"]["s_t"];
			const neighbourhoodC =
			json["2017Q3"]["72400013000280007900007000000000000000"]["1"]["s_t"];
			this.setState({
				neighbourhood: neighbourhoodC,
				district: districtC
			})
			console.log(json);
			})
		}



	render() {
		return (
			<div className="salesTime">
				<div className="salestime__container">
					{/* <div className="salestime__description"> */}
					<h4 className="salestime__title">Tiempo de venta</h4>

					<div className="salestime__all-data">
						<div className="salestime__data">
							<h6 className="salestime__data--title">Barrio</h6>
							{/* <div className="salestime__data--numbers"> */}
							<p className="salestime__data--number">	<span className="salestime_value">{this.state.neighbourhood.toLocaleString()}  sem </span></p>
							{/* </div> */}
						</div>
						<div className="salestime__data">
							<h6 className="salestime__data--title">Ciudad</h6>
							{/* <div className="salestime__data--numbers"> */}
							<p className="salestime__data--number">	<span className="salestime_value">{this.state.district.toLocaleString()}  sem </span></p>
							{/* </div> */}
						</div>
					</div>

					<p className="salestime__text">*Semanas estimadas para la venta de un inmueble en un trimestre dado.</p>
					{/* </div> */}
				</div>

			</div>
		);
	}
}

export default Salestime;
