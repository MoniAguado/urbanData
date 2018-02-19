import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<section id="contactSection" className="contact">
				<div className="block__container">
					<div className="contact__container">
						<h2 className="contact__title">Contacto</h2>
						<h3 className="contact__text">¿Preparado para comenzar a integrar nuestras APIs?</h3>
						<div className="contact_button">
							<button className="button button--contact" onClick={this.props.openCoupon}>CONTACTA CON NOSOTROS</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Contact;
