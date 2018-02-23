import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import data from '../token.json';

class Services extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			key_schools: '',
// 			key_daycare: '',
// 			key_parking: '',
// 			key_transport: ''
// 		}
// 	}
//
//
// 	componentDidMount(){
// 		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=PA_EDU_C,PA_EDU_G,PA_P,PA_TP&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3';
// 		let headers = new Headers();
// 		headers.append('Authorization', 'Token ' + data.token);
//
// 		fetch(url, {method:'GET',
// 		headers: headers
// 	})
// 	.then(response => response.json())
// 	.then(json => {
// 		console.log(json);
// 		const schools =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_EDU_C"];
// 		const daycare =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_EDU_G"];
// 		const parkings =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_P"];
// 		const transport =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_TP"];
//
// 		this.setState({
// 			key_schools: schools,
// 			key_daycare: daycare,
// 			key_parking: parkings,
// 			key_transport: transport
// 		})
// 		console.log(`colegios ${this.state.key_schools}`);
// 		console.log(`guarderias ${this.state.key_daycare}`);
// 		console.log(`parkings ${this.state.key_parking}`);
// 		console.log(`transporte ${this.state.key_transport}`);
// 	})
// }
render() {
	var config = {
		chart: { type: 'bar', height: "200"},
		title: { text: '' },
		credits: {enabled: false},

		xAxis: {
			gridLineWidth: 1,
      gridLineColor: "#eff2f7",
			categories: ['transporte'],
			title: {
				text: null
			}
		},
		yAxis: {
			gridLineWidth: 1,
      gridLineColor: "#eff2f7",
      title: {
          align: 'high',
					text: '%',
          offset: 0,
          text: 'Evolución',
          rotation: 0,
          y: -20
        },
			min: 0,
			max:100,
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ' %'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y:  -10,
			floating: true,
			borderWidth: 1,
			backgroundColor: '#FFFFFF',
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: [{
			color: "#ca1c24",
			name: 'Parkings',
			data: [this.props.servicesParkings]
		}, {
			color: "#2d303b",
			name: 'Transporte Público',
			data: [this.props.servicesTransport]
		}]
	}

	var config2 = {
		chart: { type: 'bar', height: "200"},
		title: { text: '' },
		credits: {enabled: false},

		xAxis: {
			categories: ['Educación'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '%',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ' %'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: -10,
			floating: true,
			borderWidth: 1,
			backgroundColor: '#FFFFFF',
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: [{
			color: "#ca1c24",
			name: 'Guarderias',
			data: [this.props.servicesDaycare]
		},
		{
			color: "#2d303b",
			name: 'Colegios',
			data: [this.props.servicesSchools]
		}]
	}

	return (
		<div className="services">
			<div className="services__title">
				<h3>Servicios</h3>
			</div>
			<div className="services__container">
				<div className="transport_graphic">
					<ReactHighcharts config = {config} ></ReactHighcharts>
				</div>
				<div className="education_graphic">
					<ReactHighcharts config = {config2} ></ReactHighcharts>
				</div>
			</div>
		</div>
	);
}
}

export default Services;
