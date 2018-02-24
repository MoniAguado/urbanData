import React from 'react';
import ReactHighcharts from 'react-highcharts';

class Area extends React.Component {
	render() {
		const config = {
			chart: { type: 'spline', height: "300"},
			title: { text: '' },
			credits: {enabled: false},
			xAxis: {
				categories: ['2017Q1', '2017Q2', '2017Q3','2016Q1', '2016Q2', '2016Q3','2015Q1', '2015Q2', '2015Q3'],
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
				x: 0,
			},
			series: [{
				name: 'Municipio',
				data: this.props.city,
				color: "#ca1c24",
				marker: { symbol: 'circle' }
			},{
				name: 'Barrio',
				data: this.props.neighborhood,
				color: "#2d303b",
				marker: { symbol: 'circle' }
			}]
		}
		return (
			<div className="area">
				<div className="area__container">
					<h3 className="graphic__title area_title">Precios medios de la zona (€/m²)</h3>
					<ReactHighcharts config = {config}></ReactHighcharts>
				</div>
			</div>
		);
	}
}

// Area.defaultProps ={
//
// }

export default Area;
