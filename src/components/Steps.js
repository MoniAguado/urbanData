import React from 'react';
import bubble from '../images/speech-bubble.svg';
import api from '../images/api-page.svg';
import chart from '../images/combo-chart.svg';

class Steps extends React.Component {
	render() {
		return (<section id="howDoesWorkItSection" className="steps">
			<div className="block__container">
				<div className="steps__container">
					<h2 className="steps__title">Cómo funciona</h2>
					<ul className="icon-list">
						<li className="step step1">
							<div className="step-circle">
								<span className="step__icon"><img src={bubble} width="40px" alt="contacta"/></span>
							</div>
							<div className="step__despcription">
								<div className="step__paragraphs">
									<h4 className="step__title">SOLICITA TU TOKEN
									</h4>
									<p className="step__text">Contacta con nosotros y solicita un token para identificar a tu negocio.
									</p>
								</div>
							</div>
						</li>
						<li className="step step2">
							<div className="step-circle">
								<span className="step__icon"><img src={api} width="40px" alt="selecciona datos"/></span>
							</div>
							<div className="step__despcription">
								<div className="step__paragraphs">
									<h4 className="step__title">
									SELECCIONA LOS INDICADORES PARA TU NEGOCIO</h4>
									<p className="step__text">
									Selecciona los datos que quieres utilizar y define como mostrarlos a tu audiencia.</p>
								</div>
							</div>
						</li>
						<li className="step step3">
							<div className="step-circle">
								<span className="step__icon"><img src={chart} width="40px" alt="indicadores"/></span>
							</div>
							<div className="step__despcription">
								<div className="step__paragraphs">
									<h4 className="step__title">INTEGRA LOS INDICADORES</h4>
									<p className="step__text">Integra de manera sencilla los indicadores y comienza a sacarles valor.</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>);
	}
}

export default Steps;
