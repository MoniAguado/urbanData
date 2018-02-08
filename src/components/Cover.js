import React from 'react';
import madridCover from '../images/madridCover.jpg';

class Cover extends React.Component{
	render(){
		return(
			<section className="cover">
				<div className="background" style={{backgroundImage:`url(${madridCover})`}}>
					<img src={madridCover} className="cover__photo" alt="cover"></img>
					<div className="title-block">
						<h2 className="cover__title">Introduce inteligencia inmobiliaria en tu negocio via APIs</h2>
						<button className="cover__button">Más info</button>
					</div>
				</div>
			</section>
		)
	}
}

export default Cover;
