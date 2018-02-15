import React, { Component } from 'react';
import logouda from './../images/udaWhite.png';
import logoapi from './../images/REDapi.png';

class Header extends Component {

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
    	<header className="header">
				<div className="header__container">
					<nav className="header__nav__mobile">
						<i className="fa fa-bars fa-2x" onClick={this.menuToggle}></i>
						<ul className="nav">
							<li className="nav__item" onClick={this.menuToggle}><a href="#info">¿Qué es?</a></li>
							<li className="nav__item" onClick={this.menuToggle}><a href="#indicators">¿Cómo funciona?</a></li>
							<li className="nav__item" onClick={this.menuToggle}><a href="#demo">Demo</a></li>
							<li className="nav__item" onClick={this.menuToggle}><a href="#faq">Faq</a></li>
							<li className="nav__item" onClick={this.menuToggle}><a href="#contact">Registrate ahora</a></li>
						</ul>
					</nav>
					<div className="header__item--big">
						<img src={logoapi} alt="RED api logo" className="header__image" />
					</div>
					<div className="header__item">
						<nav className="header__nav">
							<ul className="nav">
								<li className="nav__item" onClick={this.menuToggle}><a href="#info">¿Qué es?</a></li>
								<li className="nav__item" onClick={this.menuToggle}><a href="#indicators">¿Cómo funciona?</a></li>
								<li className="nav__item" onClick={this.menuToggle}><a href="#demo">Demo</a></li>
								<li className="nav__item" onClick={this.menuToggle}><a href="#faq">Preguntas Frecuentes</a></li>
								<li className="nav__item button--type" onClick={this.menuToggle}><a href="#contact" className="button--type">Registrate ahora</a></li>
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
