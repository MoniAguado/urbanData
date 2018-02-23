import React, { Component } from 'react';
import data from '../token.json';
class Carto extends Component {
	constructor(props) {
		super(props);
		this.showIframe= this.showIframe.bind(this);
		this.state = {
			isOpen: false
		};
	}

	showIframe(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		var isOpen = {
				display: this.state.isOpen ? "none" : "block"
			};

			var isClose = {
				display: this.state.isOpen ? "block" : "none"
			}

		return (
			<div className="carto__container">
				{/* <div id="map"></div> */}
				{/* <div className="carto"> */}
				<iframe width="100%" height="100%" frameBorder="0" src="https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
				<div className="share_map">
					<button type="button" className="button--share" onClick={this.showIframe}><i class="fas fa-share-alt"></i> COMPARTIR</button>
				</div>
				<div class="popup_iframe" style={ isClose }>
					<h3 className="graphic__title">Incorporar mapa</h3>
					<div className="code__iframe">
						<p>aqui va el codigo del iframe que no se como pegar .... a lo mejro capando las ("")</p>
						</div>
					</div>
			</div>
		);
	}
}

export default Carto;
