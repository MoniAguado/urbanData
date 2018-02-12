import React from 'react';
import madrid from '../images/madrid.jpg';

class Steps extends React.Component {
	render(){
		return(
			<section className="steps">
				<div className="block__container">
					<div className="steps__container">
						<h2 className="steps__title">Pasos a seguir</h2>
						<ul className="icon-list">
							<li className="step step1">
								<div className="step-circle">
									<p className="step-number">1</p>
								</div>
								<h4 className="step__title">Solicitud de Token</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
							<li className="step step2">
								<div className="step-circle">
									<p className="step-number">2</p>
								</div>
								<h4 className="step__title">Identificación de indicadores</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
							<li className="step step3">
								<div className="step-circle">
									<p className="step-number">3</p>
								</div>
								<h4 className="step__title">integración y producción</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Steps;
