import React from 'react';

class Coupon extends React.Component {

	render () {
		return (
			<section className={this.props.show? "coupon coupon--visible" : "coupon"}>
				<div className="coupon__background">
					<form className="coupon__container" method="post">
						<div className="coupon__details">
							<h3 className="coupon__title">¡Envíanos un correo!</h3>
							<div className="name-surname">
								<div className="input__container input__modifier-left">
									<label htmlFor="name">Nombre<span className="asterisk">*</span></label>
									<input type="text" className="name" id="name" name="name"/>
								</div>
								<div className="input__container input__modifier-right">
									<label htmlFor="surname">Apellidos<span className="asterisk">*</span></label>
									<input type="text" className="surname" id="surname" name="surname"/>
								</div>
							</div>
							<div className="mail-phone">
								<div className="input__container input__modifier-left">
									<label htmlFor="mail">E-mail<span className="asterisk">*</span></label>
									<input type="email" name="mail" id="mail"/>
								</div>
								<div className="input__container input__modifier-right">
									<label htmlFor="phone">Teléfono<span className="asterisk">*</span></label>
									<input type="tel" name="phone" id="phone"/>
								</div>
							</div>
							<div className="input__container">
								<label htmlFor="request">Consulta<span className="asterisk">*</span></label>
								<textarea name="request" id="request">
								</textarea>
							</div>
							<div className="input__container input__checkbox">
								<input type="checkbox" name="checkbox" id="checkbox"/>
								<label htmlFor="checkbox">Tu privacidad nos importa. Acepta con tranquilidad nuestra política de privacidad y condiciones del servicio.</label>
							</div>
							<div className="input__submit">
								<button className="button button--submit">ENVIAR</button>
							</div>
							<button type="button" className="button button--close" onClick={this.props.onRequestClose}>X</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default Coupon;
