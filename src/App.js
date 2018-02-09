import React, { Component } from 'react';

import Contact from './components/Contact';
import Coupon from './components/Coupon';
import Cover from './components/Cover';
import Demo from './components/Demo';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Indicators from './components/Indicators';
import Info from './components/Info';

import '././scss/main.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isCouponVisible: false
		};
		this.openCoupon=this.openCoupon.bind(this);
		this.closeCoupon=this.closeCoupon.bind(this);
	}

	openCoupon() {
		this.setState({
			isCouponVisible: true
		});
	}
	closeCoupon() {
		this.setState({
			isCouponVisible: false
		});
	}

  render() {
    return (
      <div className="App">
				<Header />
				<main>
					<Cover />
					<Info openCoupon={this.openCoupon}/>
					<Indicators />
					<Demo />
					<Faq />
					<Contact openCoupon={this.openCoupon}/>
				</main>
				<Footer />

				<Coupon show={this.state.isCouponVisible} closeCoupon={this.closeCoupon}/>
      </div>
    );
  }
}

export default App;
