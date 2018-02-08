import React, { Component } from 'react';
import Indicators from './components/Indicators';
import '././scss/main.css';
import Cover from './components/Cover';

class App extends Component {
  render() {
    return (
      <div className="App">
				<header>
					<nav></nav>
					<button className="button--coupon">cupón</button>
					<img />
				</header>
				<main>
					<Cover />
					<section className="info"></section>
					<Indicators />
					<section className="demo">
						<button className="button--coupon">cupón</button>
						<button className="button--report"></button>
					</section>
					<section className="faqs"></section>
				</main>
				<footer>
					<img />
				</footer>
      </div>
    );
  }
}

export default App;
