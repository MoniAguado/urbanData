import React, { Component } from 'react';
import data from '../token.json';
import ReactHighcharts from 'react-highcharts';

class Area extends Component {
	constructor(props){
		super(props);

		this.state={
			priceMun: [],
			priceNeighborhood :[]
		}
	}

	componentDidMount(){
		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1';

		let headers = new Headers();
		headers.append('Authorization', 'Token ' + data.token);

		fetch(url, {method:'GET',
		headers: headers,
		})
		.then(response => response.json())
		.then(json => {
			let priceMun = [];
			for (let i=1; i<= 3 ; i++){
				 let priceM = json["2017Q" + i]["72400013000280007900000000000000000000"]["1"]["o_pu"];
			 	priceMun.push(priceM);
			}
			let priceNeighborhood = [];
				for (let i=1; i<= 3 ; i++){
			 		let priceN = json["2017Q" + i]["72400013000280007900007000000000000000"]["1"]["o_pu"];
					priceNeighborhood.push(priceN);
				}
			this.setState({
				priceNeighborhood : priceNeighborhood,
				priceMun : priceMun
			})
		})
	}

	render() {
		const config = {
		  xAxis: {
		    categories: ['2017Q1', '2017Q2', '2017Q3']
		  },
		  series: [{
				name: 'Municipio',
	      data: this.state.priceMun
	    },{
	      name: 'Barrio',
	      data: this.state.priceNeighborhood
	    }]
		}


		return (
			<div className="testfetch">
				<ReactHighcharts config = {config}></ReactHighcharts>
				{/* <Test
					getChartMun = {this.state.priceMun}
					getChartNeighborhood = {this.state.priceNeighborhood}
				/> */}
			</div>
		);
	}
}

export default Area;
