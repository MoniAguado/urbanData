import React, { Component } from 'react';

import data from '../token.json';

class Area extends Component {

	componentDidMount(){
		let url = 'http://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pu&operations=1&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,4]}}]}&period_codes=2017Q3';

		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

	fetch(url, {method:'GET',
		headers: headers,
	})
	.then(response => response.json())
	.then(json => console.log(json));

	}

	render() {
		return (
			<div className="testfetch">

			</div>
		);
	}
}

export default Area;
