import React, { Component } from 'react';
import TestFetch from './TestFetch.js';

class Demo extends Component{
constructor(props){
	super(props);

	this.state ={
		cities: ''
	}
}

	// componentDidMount(){
	// 	fetch('http://reds.urbandataanalytics.com/reds/api/v1.0/')
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		const myArray = json
	// 		this.setState({
	// 			cities: myArray
	// 		});
	// 		console.log(this.state.cities);
	// 	})
	// }

render(){
	return(
		<section className="demo">
			<div className="block__container">
				<h2 className="demo__title">REDapi DEMO</h2>
				<h4 className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</h4>
				<input className="demo__input" type="text" placeholder="Calle Sagasta, 5 Madrid" required="required"></input>
				<button className="demo__button">Buscar</button>
				<TestFetch />
			</div>
		</section>
	);
}

}

export default Demo;
