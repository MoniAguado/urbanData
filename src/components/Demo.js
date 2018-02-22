import React, { Component } from 'react';
import Area from './Area';
import Carto from './Carto';
import Income from './Income';
import Salestime from './Salestime';
import Services from './Services';

import logoapi from './../images/REDapi.png';

class Demo extends Component{

// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			value :'',
// 			disable : false
// 		}
// }
// 		fillInAddress(){
// 			const place = autocomplete.getPlace();
// 			console.log(place);
// 			for (component of componentForm) {
// 				this.setState({
// 					value : place
// 				});
//
// 			}
// 				console.log(autocomplete.getPlace());
// 		}
//
//
// 		function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   var place = autocomplete.getPlace();
//
//   for (var component in componentForm) {
//     document.getElementById(component).value = '';
//     document.getElementById(component).disabled = false;
//   }
//
//   // Get each component of the address from the place details
//   // and fill the corresponding field on the form.
//   for (var i = 0; i < place.address_components.length; i++) {
//     var addressType = place.address_components[i].types[0];
//     if (componentForm[addressType]) {
//       var val = place.address_components[i][componentForm[addressType]];
//       document.getElementById(addressType).value = val;
//     }
//   }


	render(){
		return(
			<section className="demo" id="demoSection">
				<div className="block__container">

					<span className="demo__span--logo">
						{/* <img src={logoapi} alt="RED api logo" className="header__image" padding-right="20px" width="150px" height="50px"/> */}
						<h2 className="demo__title">HAZ UNA PRUEBA</h2>
					</span>

					<h3 className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</h3>
					<div className="demo__form">
						<input id="pac-input" className="demo__input controls" type="text" placeholder="Calle Sagasta, 5 Madrid" required="required"></input>
						<div id="map-canvas"></div>
						<button className="button button--search">BUSCAR</button>

						<Area />
						<div className="carto-graphics">
							<Carto />
							{/* <div className="graphics"> */}
							{/* <div className="graphics_1"> */}
							<Income />
							<Salestime />
							{/* </div> */}
							<Services />
							{/* </div> */}
						</div>

						</div>
				</div>
			</section>
		);
	}
}

export default Demo;
