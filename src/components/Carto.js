import React, { Component } from 'react';

import data from '../token.json';

class Carto extends Component {

	render() {
		return (
			<div className="carto__container">
				{/* <div id="map"></div> */}
				{/* <div className="carto"> */}
				<iframe width="100%" height="100%" frameBorder="0" src="https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
				{/* </div> */}
			</div>
		);
	}
}

export default Carto;
