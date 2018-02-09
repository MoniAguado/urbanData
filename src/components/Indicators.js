import React, { Component } from 'react';
import madrid from '../images/madrid.jpg';

class Indicators extends Component{
	//constructor(props){
	//	super(props);

		//this.bind

		//this.state


	//}

render(){

	return(
		<section className="indicators">
			<div className="block__container">
				<div className="indicators__description">
					<h2 className="indicators__description--title">
						Indicadores
					</h2>
					<p className="indicators__description--text">Recibe hasta 150€ de datos inmobiliarios gratis </p>
					<p className="indicators__description--text">Aquí se muestran  algunos ejemplos de indicadores, aunque existen muchos más.</p>
				</div>
				<ul className="indicators__list">
					<li className="indicators__list--item">
						<div className="indicators__list--item-element">
							<h4 className="indicators__list--item-element-title">Valor de inmueble</h4>
							<ul className="indicators__list--item-element-list">
								<li className="indicators__list--item-element-list-item">
								Precio estimado</li>
								<li className="indicators__list--item-element-list-item">Precios máximos y mínimos</li>
								<li className="indicators__list--item-element-list-item">Precio tipología inmueble</li>
								<li className="indicators__list--item-element-list-item">Precio por estado conservación inmueble</li>
								<li className="indicators__list--item-element-list-item">Operaciones similares cerradas</li>
							</ul>
						</div>
					</li>
					<li className="indicators__list--item">
						<div className="indicators__list--item-element">
							<h4 className="indicators__list--item-element-title">Mercado</h4>
							<ul className="indicators__list--item-element-list">
								<li className="indicators__list--item-element-list-item">
								Precio medio inmuebles</li>
								<li className="indicators__list--item-element-list-item">Tiempo para alquiler / compra </li>
								<li className="indicators__list--item-element-list-item">Margen de negociación</li>
								<li className="indicators__list--item-element-list-item">Rentabilidad</li>
								<li className="indicators__list--item-element-list-item">Rating inversión</li>
							</ul>
						</div>
					</li>
					<li className="indicators__list--item">
						<div className="indicators__list--item-element">
							<h4 className="indicators__list--item-element-title">Entorno</h4>
							<ul className="indicators__list--item-element-list">
								<li className="indicators__list--item-element-list-item">
								Edad media edificaciones</li>
								<li className="indicators__list--item-element-list-item">Edad de la población</li>
								<li className="indicators__list--item-element-list-item">Origen de la población</li>
								<li className="indicators__list--item-element-list-item">Nivel de estudios</li>
								<li className="indicators__list--item-element-list-item">Rating instalaciones</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="indicators_container--demo">
					<button className="button button--demo" href='#demo'>DEMO</button>
				</div>
			</div>
		</section>
	);


}

}

export default Indicators;
