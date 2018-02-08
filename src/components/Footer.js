import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
			<footer className="footer">
				<div className="footer__item">
					<img src="http://placehold.it/50/50" alt="Urban Data Analytics logo" className="footer__image" />
				</div>
				<div className="footer__item">
					<h3 className="footer__title">Urban Data Analytycs</h3>
					<p>Almagro 22, 5º , 28010 Madrid</p>
					<a href="mailto:uDA@urbanDataAnalytics.com">uDA@urbanDataAnalytics.com</a>
				</div>
				<div className="footer__item">
					<h3 className="footer__title">Enlaces</h3>
				</div>
			</footer>
    );
  }
}

export default Footer;
