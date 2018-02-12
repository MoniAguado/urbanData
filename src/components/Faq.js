import React, { Component } from 'react';

class Faq extends Component{


	render(){

		return(
			<section className="faq" id="faq">
				<div className="block__container">
					<h2 className="faq__title">Frequently asked questions</h2>
					<ul className="faq__list">
						<li className="faq__list--item">
							<div className="faq__list--question">
								<h3 className="faq__list--question-title">¿A qué saben las nubes?</h3>
							</div>
							<div className="faq__list--answer">
								<p className="faq__list--answer-text">nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</li>
						<li className="faq__list--item">
							<div className="faq__list--question">
								<h3 className="faq__list--question-title">¿Qué pasa cuando una fuerza imparable choca con un objeto inamovible?</h3>
							</div>
							<div className="faq__list--answer">
								<p className="faq__list--answer-text"> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</li>
						<li className="faq__list--item">
							<div className="faq__list--question">
								<h3 className="faq__list--question-title">¿Cuándo hay que dejar de decir Feliz año?</h3>
							</div>
							<div className="faq__list--answer">
								<p className="faq__list--answer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</li>
						<li className="faq__list--item">
							<div className="faq__list--question">
								<h3 className="faq__list--question-title">¿Dónde dejé mis llaves?</h3>
							</div>
							<div className="faq__list--answer">
								<p className="faq__list--answer-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
							</div>
						</li>


					</ul>
				</div>
			</section>
					);
					}
					}

					export default Faq;
