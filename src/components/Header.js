import React, { Component } from 'react';
import Rxjs from 'rxjs';
import logouda from './../images/udaWhite.png';
import logoapi from './../images/REDapi.png';

import { Link, animateScroll as scroller } from 'react-scroll';


class Header extends Component {
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
			<header className={`header ${this.state.isMin ? 'small' : '' }`}>
				<div className="header__container">
					<nav className="header__nav__mobile">
						<i className="fa fa-bars fa-2x" onClick={this.menuToggle}></i>
						<ul className="nav">
							<li className="nav__item" onClick={this.menuToggle}>
								<a href="#infoSection">¿Qué es?</a>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<a href="#howDoesWorkItSection">¿Cómo funciona?</a>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<a href="#demoSection">Demo</a>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<a href="#faqSection">Faq</a>
							</li>
							<li className="nav__item" onClick={this.menuToggle}>
								<a href="#contactSection" onClick={this.props.openCoupon}>Regístrate</a>
							</li>
						</ul>
					</nav>
					<div className="header__items-logos">
						<div className="header__item--big">
							<img src={logoapi} alt="RED api logo" className="header__image" />
						</div>
						<div className="header__item">
							<nav className="header__nav">
								<ul className="nav">

									<li className="nav__item">
										<Link activeClass="active" className="menu--item_desktop" to="infoSection" spy={true} smooth={true} duration={500} offset={-60}>¿Qué es?</Link>
									</li>
									<li className="nav__item" >
										<Link activeClass="active" className="menu--item_desktop" to="howDoesWorkItSection" spy={true} smooth={true} duration={500} offset={-60}>¿Cómo funciona?</Link>
									</li>
									<li className="nav__item" >
										<Link activeClass="active" className="menu--item_desktop" to="demoSection" spy={true} smooth={true} duration={500} offset={-60}>Demo</Link>
									</li>
									<li className="nav__item">
										<Link activeClass="active" className="menu--item_desktop" to="faqSection" spy={true} smooth={true} duration={500} offset={-60}>Preguntas Frecuentes</Link>
									</li>
									<button className="button button--register" onClick={this.props.openCoupon}>Regístrate ahora</button>
								</ul>
							</nav>
						</div>
						<div className="header__item">
							<a href="http://www.urbandataanalytics.com/" target="_blank" rel="noopener noreferrer"><img src={logouda} alt="Urban Data Analytics logo" className="header__image--small" /></a>
							</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
