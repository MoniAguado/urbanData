import React, { Component } from 'react';
import Rxjs from 'rxjs';
import logouda from './../images/udaWhite.png';
import logoapi from './../images/REDapi.png';

import { Link, animateScroll as scroller } from 'react-scroll';


class HeaderScroll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMin: false
		};
		this.scrolls$ = null;

	}

	componentDidMount() {
		this.scrolls$ = Rxjs.Observable.fromEvent(window, 'scroll')
		.subscribe(e => {
			if (window.scrollY > 0) {
				this.setState({
					isMin: true
				});
			} else {
				this.setState({
					isMin: false
				});
				 document.querySelector('.nav').style.display = 'none';

			}
		});
	}


	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset:	-60
		})
	}




	componentWillUnmount() {
		if (this.scrolls$) this.scrolls$.unsubscribe();

	}

	menuToggle() {
		let linksEl = document.querySelector('.nav');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

	render() {
		return (
			<header className={`header ${this.state.isMin ? 'small' : ''}`}>
				<div className="header__container">
					<div className="header__item-redapi">
						<img src={logoapi} alt="RED api logo" className="header__image-redapi" />
					</div>
					<nav className="header__nav">
						<i className="fa fa-bars fa-2x" onClick={this.menuToggle}></i>
						<ul className="nav">
							<li className="nav__item" onClick={this.menuToggle}>
								<Link activeClass="active" className="menu--item_desktop" to="infoSection" spy={true} smooth={true} duration={500} offset={-60}>¿Qué es?</Link>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<Link activeClass="active" className="menu--item_desktop" to="howDoesWorkItSection" spy={true} smooth={true} duration={500} offset={-60}>¿Cómo funciona?</Link>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<Link activeClass="active" className="menu--item_desktop" to="demoSection" spy={true} smooth={true} duration={500} offset={-60}>Demo</Link>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<Link activeClass="active" className="menu--item_desktop" to="faqSection" spy={true} smooth={true} duration={500} offset={-60}>Preguntas Frecuentes</Link>
							</li>
						</ul>

					</nav>
					<div className="header__container--button-register">
						<button className="button button--register" onClick={this.props.openCoupon}>Regístrate ahora</button>
					</div>
					<div className="header__item-uda">
						<a href="http://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer"><img src={logouda} alt="Urban Data Analytics logo" className="header__image-uda" /></a>
					</div>
				</div>
			</header>
		);
	}
}

export default HeaderScroll;
