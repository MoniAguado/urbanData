import React, { Component } from 'react';
import Area from './Area';
import Carto from './Carto';
import Income from './Income';
import Salestime from './Salestime';
import Services from './Services';



class Demo extends Component{
constructor(props){
	super(props);

}


render(){
	return(
		<section className="demo" id="demo">
			<div className="block__container">
				<h2 className="demo__title">REDapi DEMO</h2>
				<h3 className="demo__text">Introduce una dirección y prueba ejemplos de visualización de nuestras APIs.</h3>
				<div className="demo__form">
					<input className="demo__input" type="text" placeholder="Calle Sagasta, 5 Madrid" required="required"></input>
					<button className="button button--search">BUSCAR</button>
					<Area />
					<Carto />
					<Income />
					<Salestime />
					<Services />

				</div>
			</div>
		</section>
	);
}

}

export default Demo;
