import React from 'react';

class Cover extends React.Component{
	render(){
		return(
			<section className="cover">
				<div className="cover__background" id="coverSection">
					<div className="title-block">
						<h1 className="cover__title">Introduce inteligencia inmobiliaria en tu negocio via APIs</h1>
						<h2 className="cover__subtitle">Accede a toda la información clave del mercado inmobiliario de manera instantánea.</h2>
					</div>
				</div>
			</section>
		);
	}
}

export default Cover;
