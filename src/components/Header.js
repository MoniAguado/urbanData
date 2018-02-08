import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<header className="header">
				<img src="http://placehold.it/70/70" alt="Urban Data Analytics logo" className="header__image" />
				<nav className="header__nav">
					<ul className="nav">
						<li class="nav__item"><a href="#">item 1</a></li>
						<li class="nav__item"><a href="#">item 2</a></li>
						<li class="nav__item"><a href="#">item 3</a></li>
						<li class="nav__item"><a href="#">item 4</a></li>
					</ul>
				</nav>
			</header>
    );
  }
}

export default Header;
