import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';



import data from '../token.json';

class Services extends Component {
	constructor(props){
		super(props);
		this.state={
			key_colegios: '',
			key_guarderias: '',
			key_parking: '',
			key_transporte: ''
		}
	}


	componentDidMount(){
		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=PA_EDU_C,PA_EDU_G,PA_P,PA_TP&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3';
		let headers = new Headers();
		headers.append('Authorization', 'Token ' + data.token);

		fetch(url, {method:'GET',
			headers: headers
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			const colegios =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_EDU_C"];
		 	const guarderias =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_EDU_G"];
			const parkings =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_P"];
			const transporte =  json["2017Q3"]["72400013000280007900007000740007600000"]["PA_TP"];

			this.setState({
				key_colegios: colegios,
				key_guarderias: guarderias,
				key_parking: parkings,
				key_transporte: transporte
		 	})
			console.log(`colegios ${this.state.key_colegios}`);
			console.log(`guarderias ${this.state.key_guarderias}`);
			console.log(`parkings ${this.state.key_parking}`);
			console.log(`transporte ${this.state.key_transporte}`);
		})
	}
	render() {
		var config = {
			chart: {
			 type: 'bar'
	 },
	 title: {
				text: ''
	 },
	 xAxis: {
			 categories: ['transporte'],
			 title: {
					 text: null
			 }
	 },
	 yAxis: {
			 min: 0,
			 max:100,
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
			 y:  20,
			 floating: true,
			 borderWidth: 1,
			 backgroundColor: '#FFFFFF',
			 shadow: true
	 },
	 credits: {
			 enabled: false
	 },
	 series: [{
			 name: 'Parkings',
			 data: [this.state.key_parking]
	 }, {
			 name: 'Transporte Público',
			 data: [this.state.key_transporte]
	 }]
}

var config2 = {
		chart: {
		 type: 'bar'
	},
	title: {
		text: ''
	},
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
		 y: 20,
		 floating: true,
		 borderWidth: 1,
		 backgroundColor: '#FFFFFF',
		 shadow: true
	},
	credits: {
		 enabled: false
	},
	series: [{
		 name: 'Guarderias',
		 data: [this.state.key_guarderias]
	},
	{
		name: 'Colegios',
		data: [this.state.key_colegios]
	}]
}

		return (
			<div className="services">
				<div className="services_title">
					<h3>Servicios</h3>
				</div>
				<div className="services_container">
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
