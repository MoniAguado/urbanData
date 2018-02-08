import React, { Component } from 'react';
import '././scss/main.css';
import Header from '././components/Header';
import Footer from '././components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
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
				<Footer />
      </div>
    );
  }
}

export default App;
