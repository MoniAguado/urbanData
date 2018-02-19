import React, { Component } from 'react';
import logouda from './../images/udaWhite.png';

class Footer extends Component {
  render() {
    return (
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__item">
						<a href="http://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer"><img src={logouda} alt="Urban Data Analytics logo" className="footer__image--logo" /></a>
						<p>uDA © 2018 From Madrid since 2013</p>
					</div>
				</div>
			</footer>
    );
  }
}

export default Footer;
