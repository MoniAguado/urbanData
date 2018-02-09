import React from 'react';

class Info extends React.Component {
	render () {
		return (
			<section className="info">
				<div className="block__container info__container">
					<div className="info__details--description">
						<p className="info__text">REDapi es una plataforma global de información y abierta de APIs que te permite acceder a indicadores inmobiliarios de manera ágil e implementarlas fácilmente en tu empresa.</p>
						<p className="info__text">“Obtén indicadores financieros y urbanos tanto para alquiler como compraventa que apoyen tu modelo de negocio”.</p>
					</div>
					<div className="info__details--action">
						<h3 className="info__title">¿Quieres saber cómo integrar las APIs de urbanData Analytics  en tu empresa?</h3>
						<button className="button--contact" onClick={this.props.openCoupon}>Contacta con nosotros</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Info;
