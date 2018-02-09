import React from 'react';
import nyCover from '../images/ny2.jpg';

class Cover extends React.Component{
	render(){
		return(
			<section className="cover">
				<div className="background" style={{backgroundImage:`url(${nyCover})`}}>
					<img src={nyCover} className="cover__photo" alt="cover"></img>
					<div className="title-block">
						<h1 className="cover__title">Introduce inteligencia inmobiliaria en tu negocio via APIs</h1>
						<button className="button button--info">MÁS INFORMACIÓN</button>
					</div>
				</div>
			</section>
		)
	}
}

export default Cover;
