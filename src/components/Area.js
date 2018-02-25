import React from 'react';
import ReactHighcharts from 'react-highcharts';

class Area extends React.Component {
	render() {
		const defaultCity = [
			3886.32,
			4181.39,
			4348.16,
			3571.15,
			3777.36,
			3725.52,
			3440.32,
			3510.65,
			3526.48
		];

		const defaultNeightborhood = [
			2678.47,
			2715.41,
			2853.88,
			2574.29,
			2615.81,
			2650.87,
			2558.64,
			2594.18,
			2616.43
		];

		const config = {
			chart: {
				type: 'spline',
				height: "300"
			},
			plotOptions: {
				series: {
					animation: false
				}
			},

			title: {
				text: ''
			},
			credits: {
				enabled: false
			},
			xAxis: {
				categories: [
					'2015Q1',
					'2015Q2',
					'2015Q3',
					'2016Q1',
					'2016Q2',
					'2016Q3',
					'2017Q1',
					'2017Q2',
					'2017Q3'
				],
				gridLineWidth: 1,
				gridLineColor: "#eff2f7"
			},
			yAxis: {
				title: {
					text: '€/m²'
				}
			},
			legend: {
				align: 'right',
				verticalAlign: 'top',
				layout: 'horizontal',
				x: 0
			},
			series: [
				{
					name: 'Municipio',
					data: this.props.city || defaultCity,
					color: "#ca1c24",
					marker: {
						symbol: 'circle'
					}
				}, {
					name: 'Barrio',
					data: this.props.neighborhood || defaultNeightborhood,
					color: "#2d303b",
					marker: {
						symbol: 'circle'
					}
				}
			]
		}
		return (
			<div className="area">
				<div className="area__container">
					<h3 className="graphic__title area_title">Precios medios de la zona (€/m²)</h3>
					<ReactHighcharts config={config}></ReactHighcharts>
				</div>
			</div>
		);
	}
}

export default Area;
