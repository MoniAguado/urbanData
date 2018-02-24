import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class Services extends Component {
	render() {
		const defaultServicesParkings = 75.44;
		const defaultServicesTransport = 100;
		const defaultServicesDaycare = 36.77;
		const defaultServicesSchools = 89.55;


		var config = {
			chart: { type: 'bar', height: "250"},
			title: { text: '' },
			credits: {enabled: false},

			xAxis: {
				gridLineWidth: 1,
	      gridLineColor: "#eff2f7",
				categories: ['Acceso a transportes'],
				title: {
					text: null
				},
				labels: {
					rotation: -90
				}
			},
			yAxis: {
				gridLineWidth: 1,
	      gridLineColor: "#eff2f7",
	      title: {
	          align: 'high',
						text: '%'
	        },
				min: 0,
				max:100,
				labels: {
					overflow: 'justify',
				}
			},
			tooltip: {
				useHTML: true,
				valueSuffix: ' %',
				headerFormat: ''
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
				verticalAlign: 'center',
				x: -10,
				y: -10,
				floating: true,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},


			series: [{
				color: "#ca1c24",
				name: 'Parkings',
				data: [this.props.servicesParkings || defaultServicesParkings]
			}, {
				color: "#2d303b",
				name: 'Transporte Público',
				data: [this.props.servicesTransport || defaultServicesTransport]
			}]
		}

		var config2 = {
			chart: { type: 'bar', height: "250"},
			title: { text: '' },
			credits: {enabled: false},

			xAxis: {
				gridLineWidth: 1,
	      gridLineColor: "#eff2f7",
				categories: ['Acceso a educación'],
				title: {
					text: null
				},
				labels: {
					rotation: -90
				}
			},
			yAxis: {
				gridLineWidth: 1,
	      gridLineColor: "#eff2f7",
	      title: {
	          align: 'high',
						text: '%'
	        },
				min: 0,
				max:100,
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				useHTML: true,
				valueSuffix: ' %',
				headerFormat: ''
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
				verticalAlign: 'center',
				x: -50,
				y: -10,
				floating: true,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},

			series: [{
				color: "#ca1c24",
				name: 'Guarderias',
				data: [this.props.servicesDaycare || defaultServicesDaycare]
			},
			{
				color: "#2d303b",
				name: 'Colegios',
				data: [this.props.servicesSchools || defaultServicesSchools]
			}]
	}

		return (
			<div className="services">
				<div className="services__title">
					<h3 className="graphic__title service_title">Accesibilidad a servicios de la zona</h3>
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
