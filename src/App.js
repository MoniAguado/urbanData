import React, { Component } from 'react';
import '././scss/main.css';

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
					<section className="cover"></section>
					<section className="info"></section>
					<section className="indicators"></section>
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
