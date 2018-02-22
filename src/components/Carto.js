import React, { Component } from 'react';

import data from '../token.json';

class Carto extends Component {

	componentDidMount(){
		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1';
		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

		fetch(url, {method:'GET',
		headers: headers
		})
		.then(response => response.json())
		.then(json => console.log(json));
	}

// 	function mapa(lat, lon) {
//   // create leaflet map
//   var map = L.map('map', {
//     zoomControl: false,
//     scrollWheelZoom: false,
//     center: [0, 0],
//     zoomControl: true,
//     zoom: 3
//    });
//
//   // add a base layer
//   L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
//     attribution: ''
//   }).addTo(map);
//
//   // add CARTO layer with one sublayer
//   cartodb.createLayer(map, {
//     user_name: 'udasaas',
//     type: 'namedmap',
//     named_map: {
//       name: "adalab_view",
//       layers: [{
//         layer_name: "t",
//         interactivity: "municipio,distrito,barrio,precio_m2"
//        }]
//      }
//     })
//     .addTo(map)
//     .done(function(layer) {
//       layer.getSubLayer(0).setInteraction(true);
//
//       // show infowindows on click
//       cdb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['municipio','distrito','barrio','precio_m2']);
//
//       map.setView([lat, lon],14,true);
//     });
// }

	render() {
		return (
			<div className="carto__container">
				{/* <div className="carto"> */}
				<iframe width="100%" height="100%" frameBorder="0" src="https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
				{/* </div> */}
			</div>
		);
	}
}

export default Carto;
