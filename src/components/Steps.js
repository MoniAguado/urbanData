import React from 'react';

class Steps extends React.Component {
	render(){
		return(
			<section className="steps">
				<div className="block__container">
					<div className="steps__container">
						<h2 className="steps__title">Cómo funciona</h2>
						<ul className="icon-list">
							<li className="step step1">
								<div className="step-circle">
									<p className="step-number">1</p>
								</div>
								<h4 className="step__title">Contacta con nosotros y solicita un token para identificar a tu negocio. </h4>
							</li>
							<li className="step step2">
								<div className="step-circle">
									<p className="step-number">2</p>
								</div>
								<h4 className="step__title">Selecciona los datos que quieres utilizar y define como mostrarlos a tu audiencia.</h4>
							</li>
							<li className="step step3">
								<div className="step-circle">
									<p className="step-number">3</p>
								</div>
								<h4 className="step__title">Integra de manera sencilla los indicadores y comienza a sacarles valor.</h4>
								</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Steps;
