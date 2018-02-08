import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<section className="contact">
				<p className="contact__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<form className="contact__form">
					<div className="name-email">
						<input className="form__name" type="text" placeholder="Nombre" required="required"></input>
						<input className="form__email" type="email" placeholder="Email" required="required"></input>
					</div>
					<div className="message-button">
						<textarea col="50" row="70" className="form__message" type="text" placeholder="Mensaje" required="required"></textarea>
						<button className="form__button">Enviar</button>
					</div>
				</form>
			</section>
		)
	}
}

export default Contact;
