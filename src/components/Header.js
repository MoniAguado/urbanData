import React, { Component } from 'react';
import logouda from './../images/udaWhite.png';
import logoapi from './../images/REDapi.png';

class Header extends Component {

	burgerToggle() {
	let linksEl = document.querySelector('.nav');
	if (linksEl.style.display === 'block') {
		linksEl.style.display = 'none';
	} else {
		linksEl.style.display = 'block';
	}
}
  render() {
    return (
    	<header className="header">
				<div className="header__container">
					<nav className="header__nav__mobile">
						<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
						<ul className="nav">
							<li className="nav__item" onClick={this.burgerToggle}><a href="#info">¿Qué es?</a></li>
							<li className="nav__item" onClick={this.burgerToggle}><a href="#indicators">¿Cómo funciona?</a></li>
							<li className="nav__item" onClick={this.burgerToggle}><a href="#demo">Demo</a></li>
							<li className="nav__item" onClick={this.burgerToggle}><a href="#faq">FAQ</a></li>
							<li className="nav__item" onClick={this.burgerToggle}><a href="#">Contacto</a></li>
						</ul>
					</nav>
					<div className="header__item--big">
						<img src={logoapi} alt="RED api logo" className="header__image" />
					</div>
					<div className="header__item">
						<nav className="header__nav">
							<ul className="nav">
								<li className="nav__item" onClick={this.burgerToggle}><a href="#info">¿Qué es?</a></li>
								<li className="nav__item" onClick={this.burgerToggle}><a href="#indicators">¿Cómo funciona?</a></li>
								<li className="nav__item" onClick={this.burgerToggle}><a href="#demo">Demo</a></li>
								<li className="nav__item" onClick={this.burgerToggle}><a href="#faq">Faq</a></li>
								<li className="nav__item" onClick={this.burgerToggle}><a href="#contact">Contacto</a></li>
							</ul>
						</nav>
					</div>
					<div className="header__item">
						<img src={logouda} alt="Urban Data Analytics logo" className="header__image--small" />
					</div>

				</div>
			</header>
    );
  }
}

export default Header;
