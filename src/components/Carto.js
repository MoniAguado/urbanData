import React, { Component } from 'react';

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
		return (
			<div className="carto__container">
				<iframe title="Carto" width="100%" height="100%" frameBorder="0" src="https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
				<div className="share_map">
					<button type="button" className="button--share" onClick={this.showIframe}><i className="fas fa-share-alt"></i> COMPARTIR</button>
				</div>
				<div className={this.state.isOpen? "iframe--visible" : "iframe"}>
					<div className="popup_iframe">
						<h3 className="graphic__title">Incorporar mapa</h3>
						<div className="code__iframe">
							<p><textarea className="textarea__iframe" value="&lt;iframe width=&quot;100%&quot; height=&quot;100%&quot; src=&quot;https://uda-maps.carto.com/u/udasaas/builder/608abb17-ee1f-4550-a7a4-490e5fe6f4e6/embed&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;"></textarea></p>
						</div>
						<button onClick={this.showIframe} type="button" className="button button--close">X</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Carto;
