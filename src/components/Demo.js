import React, { Component } from 'react';
import Area from './Area';
// import Carto from './Carto';
import Income from './Income';
import Salestime from './Salestime';
// import Services from './Services';

import logoapi from './../images/REDapi.png';

class Demo extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		value = '',
	// 		disable = false
	// 	}
	//
	// 	fillInAddress(){
	// 		const place = autocomplete.getPlace();
	// 	}
	//
	//
	// 	function fillInAddress() {
  // // Get the place details from the autocomplete object.
  // var place = autocomplete.getPlace();
	//
  // for (var component in componentForm) {
  //   document.getElementById(component).value = '';
  //   document.getElementById(component).disabled = false;
  // }
	//
  // // Get each component of the address from the place details
  // // and fill the corresponding field on the form.
  // for (var i = 0; i < place.address_components.length; i++) {
  //   var addressType = place.address_components[i].types[0];
  //   if (componentForm[addressType]) {
  //     var val = place.address_components[i][componentForm[addressType]];
  //     document.getElementById(addressType).value = val;
  //   }
  // }

	render(){
		return(
			<section className="demo" id="demoSection">
				<div className="block__container">

					<span className="demo__span--logo">
						<img src={logoapi} alt="RED api logo" className="header__image" padding-right="20px" width="150px" height="50px"/>
						<h2 className="demo__title">DEMO</h2>
					</span>

					<h3 className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</h3>
					<div className="demo__form">
						<input className="demo__input" type="text" placeholder="Calle Sagasta, 5 Madrid" required="required"></input>
						<button className="button button--search">BUSCAR</button>
						<Area />
						{/* <Carto /> */}
						<div className="graphics">
							<Income />
							<Salestime />
						</div>
							{/*<Services /> */}
						</div>
				</div>
			</section>
		);
	}
}

export default Demo;
