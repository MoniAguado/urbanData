import React, { Component } from 'react';
import Cover from './components/Cover';
import Footer from '././components/Footer';
import Header from '././components/Header';
import Indicators from './components/Indicators';
import Contact from './components/Contact';

import '././scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<main>
					<Cover />
					<section className="info"></section>
					<Indicators />
					<section className="demo">
						<button className="button--coupon">cupón</button>
						<button className="button--report"></button>
					</section>
					<section className="faqs"></section>
					<Contact />
				</main>
				<Footer />
      </div>
    );
  }
}

export default App;
