import React, { Component } from 'react';
import Indicators from './components/Indicators';
import Demo from './components/Demo';
import Faq from './components/Faq';
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
					<Indicators />
					<Demo />
					<Faq />
				</main>
				<footer>
					<img />
				</footer>
      </div>
    );
  }
}

export default App;
