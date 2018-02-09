import React from 'react';
import madrid from '../images/madrid.jpg';
import excel from '../images/excel.png';

class Reports extends React.Component {
	render(){
		return(
			<section className="reports">
				<div className="block__container">
					<div className="reports__container">
						<h2 className="reports__title">Posibilidad de generación de informes</h2>
						<div className="reports__description">
							<p className="reports__description--text">Accede a todos los indicadores integrando nuestra API en minutos ya sea para desarrollar herramientas online, informes en pdf o en Excel </p>
							<img className="reports__description--img" src={madrid} width="100px" height="100px" alt="madrid"/>
							<img className="reports__container--img" src={excel} width="100px" height="100px" alt="excel icono"/>
							<button className="reports__button--download">Descargar PDF</button>
						</div>
					</div>
				</div>
				</section>
		)
	}
}

export default Reports;
