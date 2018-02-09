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
import Reports from './components/Reports';
import Steps from './components/Steps';

import '././scss/main.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isCouponVisible: false
		};
		this.toggleCoupon=this.toggleCoupon.bind(this);
	}

	toggleCoupon() {
		this.setState({
			isCouponVisible: !this.state.isCouponVisible
		});
	}

  render() {
    return (
      <div className="App">
				<Header />
				<main>
					<Cover />
					<Info openCoupon={this.toggleCoupon}/>
					<Indicators />
					<Reports />
					<Steps />
					<Demo />
					<Faq />
					<Contact />
				</main>
				<Footer />
				<Coupon closeCoupon={this.toggleCoupon} status={this.state.isCouponVisible}/>
      </div>
    );
  }
}

export default App;
