import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

import Awards from './components/Awards';
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
import Test from './components/Test';
import '././scss/main.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.openCoupon=this.openCoupon.bind(this);
		this.closeCoupon=this.closeCoupon.bind(this);
	}

	openCoupon() {
		this.setState({
			visible: true
		});
	}
	closeCoupon() {
		this.setState({
			visible: false
		});
	}
	//
	// fetch('http://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pm,s_p&operations=1&geo_codes=72400013000280007900013000000000000000&category_codes=P_01&period_codes=2016Q1' {
  // 	headers: {
  //   authorization:'Token ' + '3iq4pxi5tj9pw2n444m5cqoyk3fm2bqgcdxq3m4y'
	//  }
	// })




	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Cover />
					<Info openCoupon={this.openCoupon}/>
					<Indicators />
					<Reports />
					<Steps />
					<Demo />
					<Faq />
					<Contact openCoupon={this.openCoupon}/>
					<Awards />
				</main>
				<Footer />

				<Coupon show={this.state.visible}
					onRequestClose={this.closeCoupon}
				/>
			</div>
		);
	}
}

export default App;
