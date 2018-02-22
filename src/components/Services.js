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
// 	const config = {
//     chart: {
//         type: 'solidgauge',
//         height: '110%'
//     },
//     title: {
//         text: 'Activity',
//         style: {
//             fontSize: '24px'
//         }
//     },
//
//     tooltip: {
//         borderWidth: 0,
//         backgroundColor: 'none',
//         shadow: false,
//         style: {
//             fontSize: '16px'
//         },
//         pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
//         positioner: function (labelWidth) {
//             return {
//                 x: (this.chart.chartWidth - labelWidth) / 2,
//                 y: (this.chart.plotHeight / 2) + 15
//             };
//         }
//     },
//
//     pane: {
//         startAngle: 0,
//         endAngle: 360,
//         background: [{ // Track for Move
//             outerRadius: '112%',
//             innerRadius: '88%',
//             backgroundColor: '#687790',
//             borderWidth: 0
//         }, { // Track for Exercise
//             outerRadius: '87%',
//             innerRadius: '63%',
//             backgroundColor: '#687790',
//             borderWidth: 0
//         }, { // Track for Stand
//             outerRadius: '62%',
//             innerRadius: '38%',
//             backgroundColor: '#687790',
//             borderWidth: 0
//         }]
//     },
//
//     yAxis: {
//         min: 0,
//         max: 100,
//         lineWidth: 0,
//         tickPositions: []
//     },
//
//     plotOptions: {
//         solidgauge: {
//             dataLabels: {
//                 enabled: false
//             },
//             linecap: 'round',
//             stickyTracking: false,
//             rounded: true
//         }
//     },
//
//     series: [{
//         name: 'Parkings',
//         data: [{
//             color: "#ca1c24",
//             radius: '112%',
//             innerRadius: '88%',
//             y: [this.state.key_parking]
//         }]
//     }, {
//         name: 'Transporte público',
//         data: [{
//             color: "#2d303b",
//             radius: '87%',
//             innerRadius: '63%',
//             y: [this.state.key_transporte]
//         }]
// 	}
// }]
// }


// 		// var colors = Highcharts.getOptions().colors,
//     categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
//     data = [{
//         y: 0.2,
//         color: colors[5],
//         drilldown: {
//             name: 'Proprietary or Undetectable',
//             categories: [],
//             data: [],
//             color: colors[5]
//         }
//     }],
//     browserData = [],
//     versionsData = [],
//     i,
//     j,
//     dataLen = data.length,
//     drillDataLen,
//     brightness,
//
//     chart: {
//         type: 'pie'
//     },
//     title: {
//         text: ''
//     },
//
//     yAxis: {
//         title: {
//             text: ''
//         }
//     },
//     plotOptions: {
//         pie: {
//             shadow: false,
//             center: ['50%', '50%']
//         }
//     },
//     tooltip: {
//         valueSuffix: '%'
//     },
//     series: [{
//         name: 'Parkings',
//         data: [this.state.key_parking],
//         size: '60%',
//         dataLabels: {
//             formatter: function () {
//                 return this.y > 5 ? this.point.name : null;
//             },
//             color: '#ffffff',
//             distance: -30
//         }
//     }, {
//         name: 'Transportes públicos',
//         data: [this.state.key_transporte],
//         size: '80%',
//         innerSize: '60%',
//         dataLabels: {
//             formatter: function () {
//                 // display only if larger than 1
//                 return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
//                     this.y + '%' : null;
//             }
//         },
//         id: 'versions'
//     }],
//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 400
//             },
//             chartOptions: {
//                 series: [{
//                     id: 'versions',
//                     dataLabels: {
//                         enabled: false
//                     }
//                 }]
//             }
//         }]
//     }
// };


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
			data: [this.state.key_parking]
		}, {
			color: "#2d303b",
			name: 'Transporte Público',
			data: [this.state.key_transporte]
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
			data: [this.state.key_guarderias]
		},
		{
			color: "#2d303b",
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
