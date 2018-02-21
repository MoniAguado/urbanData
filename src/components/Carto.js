import React, { Component } from 'react';

import data from '../token.json';

class Carto extends Component {

	componentDidMount(){
		let url = 'http://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3,2017Q2,2017Q1';
		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

		fetch(url, {method:'GET',
		headers: headers
		})
		.then(response => response.json())
		.then(json => console.log(json));
	}

	render() {
		return (
			<div className="carto">
				<iframe width="100%" height="520" frameBorder="0" src="https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

			</div>
		);
	}
}

export default Carto;
