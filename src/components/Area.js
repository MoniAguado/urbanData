import React, { Component } from 'react';
import data from '../token.json';
import Test from './Test';

class Area extends Component {
	constructor(props){
		super(props);
		this.state={
			priceMun: []
		}
	}

	componentDidMount(){
		let url = 'http://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1';

		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

		fetch(url, {method:'GET',
		headers: headers,
		})
		.then(response => response.json())
		.then(json => {
			let priceMun = [];
				for (let i=1; i<= 3 ; i++){
				 let precio = json["2017Q" + i]["72400013000280007900000000000000000000"]["1"]["o_pu"];
				 priceMun.push(precio);
				}
			this.setState({
				priceMun : priceMun
			})
			}
		)
	}

	render() {

		return (
			<div className="testfetch">
				<Test getChart = {this.state.priceMun} />
			</div>
		);
	}
}

export default Area;
