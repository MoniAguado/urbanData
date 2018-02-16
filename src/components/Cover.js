import React from 'react';
import mad from '../images/sky.jpg';


class Cover extends React.Component{
	render(){
		return(
			<section className="cover">
				<div className="cover__background" style={{backgroundImage:`url(${mad})`}}>
					<img src={mad} className="cover__photo" alt="cover"></img>
					<div className="title-block">
						<h1 className="cover__title">Introduce inteligencia inmobiliaria en tu negocio via APIs</h1>
						<h2 className="cover__subtitle">Accede a toda la información clave del mercado inmobiliario de manera instantánea.</h2>
					</div>
				</div>
			</section>
		)
	}
}

export default Cover;
