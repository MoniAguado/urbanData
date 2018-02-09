import React, { Component } from 'react';
import logouda from './../images/udaWhite.png';
import logoapi from './../images/REDapi.png';

class Header extends Component {
  render() {
    return (
    	<header className="header">
				<div className="header__container">
					<div className="header__item--big">
						<img src={logoapi} alt="RED api logo" className="header__image" />
					</div>
					<div className="header__item">
						<nav className="header__nav">
							<ul className="nav">
								<li className="nav__item"><a href="#">¿Qué es?</a></li>
								<li className="nav__item"><a href="#">¿Cómo funciona?</a></li>
								<li className="nav__item"><a href="#">Demo</a></li>
								<li className="nav__item"><a href="#">Faq</a></li>
								<li className="nav__item"><a href="#">Contacto</a></li>
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
