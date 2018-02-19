import React, { Component } from 'react';

class Indicators extends Component{

render(){

	return(
		<section className="indicators" id="indicators">
			<div className="indicators__background">
				<div className="block__container indicators__container">
					<div className="indicators__description">
						<h2 className="indicators__description--title">
						INDICADORES INMOBILIARIOS	</h2>
						<p className="indicators__description--text">Recibe hasta 150€ de datos inmobiliarios gratis </p>
					</div>
					<ul className="indicators__list">
						<li className="indicators__list--item">
							<div className="indicators__list--item-element">
								<h4 className="indicators__list--item-element-title">Inmueble</h4>
								<ul className="indicators__list--item-element-list">
									<li className="indicators__list--item-element-list-item">
									Precio estimado</li>
									<li className="indicators__list--item-element-list-item">Precios máximos y mínimos</li>
									<li className="indicators__list--item-element-list-item">Precio tipología inmueble</li>
									<li className="indicators__list--item-element-list-item">Precio por estado conservación inmueble</li>
									<li className="indicators__list--item-element-list-item">Operaciones similares cerradas</li>
									<li>...</li>
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
									<li>...</li>
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
									<li>...</li>
								</ul>
							</div>
						</li>
					</ul>
					<div className="indicators_container--btndemo">
						<button className="button button--demo" href='#demo'>DEMO</button>
					</div>
				</div>
			</div>
		</section>
	);


}

}

export default Indicators;
