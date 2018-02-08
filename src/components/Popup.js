import React from 'react';

class Popup extends React.Component {
	render () {
		return (
			<section className="form">
				<form className="form__container">
					<div className="form__details">
						<div className="name-surname">
							<div className="input__name">
								<label htmlFor="name">Nombre*</label>
								<input type="text" id="name" placeholder="Nombre" required="required" />
							</div>
							<div className="input__surname">
								<label htmlFor="surname">Apellidos*</label>
								<input type="text" id="surname" placeholder="Apellidos" required="required"/>
							</div>
						</div>
						<div className="mail-phone">
							<div className="input__mail">
								<label htmlFor="mail">E-mail*</label>
								<input type="email" id="mail"placeholder="E-mail"   required="required"/>
							</div>
							<div className="input__phone">
								<label htmlFor="phone">Teléfono*</label>
								<input type="tel" id="phone" placeholder="Teléfono" required="required"/>
							</div>
						</div>
						<div className="input__request">
							<label htmlFor="request">Consulta*</label>
							<textarea id="request" placeholder="Mensaje" required="required">
							</textarea>
						</div>
						<button className="button--submit">Enviar</button>
					</div>
				</form>
			</section>

		);
	}
}

export default Popup;
