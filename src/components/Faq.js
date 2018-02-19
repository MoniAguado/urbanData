import React, { Component } from 'react';
import bullet from './../images/check.png';
class Faq extends Component{


	render(){

		return(
			<section  id="faqSection" className="faq">
				<div className="faq__background">
					<div className="block__container">
						<h2 className="faq__title">Preguntas frecuentes</h2>
						<ul className="faq__list">
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿De dónde sacáis los datos?</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">Todos los datos son de elaboración propia de UDA aunque nos nutrimos de información de: INE, Catastro, Colegio de Registradores, Consejo General del Notariado, agregadores de Portales Inmobiliarios, APIs inmobiliarios, OSM, Portales de OpenData, Redes sociales, etc.</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Qué pasa si me paso de la cuota?, ¿me vais a cobrar más automáticamente?
									</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">El sistema te informará de que no tienes más cuotas. Lo normal es que contactes con nosotros y te informamos de las condiciones para ampliar el límite de peticiones.
									</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Cómo se define una petición? ¿cada vez que se carga la página mide una petición?</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">Cada vez que tú sistema invoca a nuestra API contabilizamos una petición. Si habéis cacheado la información no siempre que la página se cague vamos a contabilizar la petición.</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Qué información mínima necesita el API para devolver valores?
									</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text"> Con una ubicación es suficiente. Si nos das más información podemos precisar más. Por ejemplo, si incluyes la superficie de las viviendas por las que preguntas te damos más grado de detalle.</p>
								</div>
							</li>
							<li className="faq__list--item last-question">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Qué tipo de preguntas le puedo hacer a vuestra API?
									</h3>
								</div>
								<div className="faq__list--answer">
									<ul className="faq__list--answer-text">
										<li className="faq__list--answer-text-li"><img src={bullet} alt="-" width="12px" /> ¿Cuánto vale una casa? ¿Por cuánto alquilo una casa?</li>
										<li className="faq__list--answer-text-li"><img src={bullet} alt="-" width="12px" /> ¿Cuál es el precio medio de un barrio?</li>
										<li className="faq__list--answer-text-li"><img src={bullet} alt="-" width="12px" /> ¿Cuál es el histórico de precios de una ciudad?</li>
										<li className="faq__list--answer-text-li"><img src={bullet} alt="-" width="12px" /> ¿Cuál es la tendencia de precios de una casa como la mía?</li>
										<li className="faq__list--answer-text-li"><img src={bullet} alt="-" width="12px" /> ¿Cuál es la rentabilidad de alquiler de mi ciudad?</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Faq;
