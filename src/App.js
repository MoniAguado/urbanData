import React, { Component } from 'react';
import Cover from './components/Cover';
import Footer from '././components/Footer';
import Header from '././components/Header';
import Indicators from './components/Indicators';

import TestFetch from './components/TestFetch';


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
				</main>
				<Footer />
      </div>
    );
  }
}

export default App;
