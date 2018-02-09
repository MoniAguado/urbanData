import React from 'react';

class Coupon extends React.Component {

	render () {
		return (
			<section className="coupon">
				<div className="coupon__background">
					<form className="coupon__container">
						<div className="coupon__details">
							<h3 className="coupon__title">¡Envíanos un correo!</h3>
							<div className="name-surname">
								<div className="input__container">
									<label htmlFor="name">Nombre<span className="asterisk">*</span></label>
									<input type="text" id="name" name="name" placeholder="Nombre" required="required" />
								</div>
								<div className="input__container">
									<label htmlFor="surname">Apellidos<span className="asterisk">*</span></label>
									<input type="text" id="surname" name="surname" placeholder="Apellidos" required="required"/>
								</div>
							</div>
							<div className="mail-phone">
								<div className="input__container">
									<label htmlFor="mail">E-mail<span className="asterisk">*</span></label>
									<input type="email" name="mail" id="mail" placeholder="E-mail" required="required"/>
								</div>
								<div className="input__container">
									<label htmlFor="phone">Teléfono<span className="asterisk">*</span></label>
									<input type="tel" name="phone" id="phone" placeholder="Teléfono" required="required"/>
								</div>
							</div>
							<div className="input__container">
								<label htmlFor="request">Consulta<span className="asterisk">*</span></label>
								<textarea name="request" id="request"  placeholder="Mensaje" required="required">
								</textarea>
							</div>
							<div className="input__checkbox input__checkbox--custom">
								<input type="checkbox" name="checkbox" id="checkbox"/>
								<label htmlFor="checkbox">Tu privacidad nos importa. Acepta con tranquilidad nuestra política de privacidad y condiciones del servicio.</label>
							</div>
							<button className="button button--submit">Enviar</button>
							<button className="button button--close" onClick={this.props.closeCoupon}>X</button>

						</div>
					</form>
				</div>
			</section>

		);
	}
}

export default Coupon;
