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
									<p className="faq__list--answer-text">Todos los datos son de elaboración propia, aunque nos nutrimos de información de pública y privada: INE, Catastro, Colegio de Registradores, Consejo General del Notariado, agregadores de Portales Inmobiliarios, APIs inmobiliarios, OSM, Portales de OpenData etc.</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Qué pasa si me paso de la cuota?, ¿me vais a cobrar más automáticamente?
									</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">El sistema te informará de que has superado la cuota contratada. Lo normal es que contactes con nosotros y te informamos de las condiciones para ampliar el límite de peticiones.
									</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Cómo se define una petición? ¿Cada cuanto actualizais la información?</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">Cada vez que tu sistema invoca a nuestra API contabilizamos una petición. Nuestro sistema actualiza la información disponible diariamente.</p>
								</div>
							</li>
							<li className="faq__list--item">
								<div className="faq__list--question">
									<h3 className="faq__list--question-title">¿Qué información mínima necesita el sistema para que devuelva valores?
									</h3>
								</div>
								<div className="faq__list--answer">
									<p className="faq__list--answer-text">Con una ubicación es suficiente. Sin embargo, cuanto más información envíes más precisa y exahustiva será la repuesta. Por ejemplo, si incluyes la superficie de las viviendas por las que preguntas te damos más grado de detalle.</p>
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
