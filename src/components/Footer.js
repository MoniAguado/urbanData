import React, { Component } from 'react';
import logouda from './../images/udaWhite.png';

class Footer extends Component {
  render() {
    return (
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__item">
						<a href="http://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer"><img src={logouda} alt="Urban Data Analytics logo" className="footer__image--logo" /></a>
						<p>uDA urbanData Analytics © 2018</p>
					</div>
					<div className="footer__item">
						<h3 className="footer__title">Premios</h3>
						<img src="http://placehold.it/30/30" alt="premio 1" className="footer__image--premio" />
						<img src="http://placehold.it/30/30" alt="premio 1" className="footer__image--premio" />
						<img src="http://placehold.it/30/30" alt="premio 1" className="footer__image--premio" />
					</div>
				</div>
			</footer>
    );
  }
}

export default Footer;
