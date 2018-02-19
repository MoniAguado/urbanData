import React, { Component } from 'react';
// import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

import Awards from './components/Awards';
// import Charts from './components/Charts';
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

	render() {
		return (
			<div className="App">
				<Header openCoupon={this.openCoupon}/>
				<main>
					<Cover />
					<Info openCoupon={this.openCoupon}/>
					<Indicators />
					<Reports />
					<Steps />
					<Demo />
					{/* <Charts /> */}
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
