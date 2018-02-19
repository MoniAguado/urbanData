import React from 'react';
import excel from '../images/excel.png';
import report from '../images/report1.jpg';
import report2 from '../images/report2.jpg';

class Reports extends React.Component {
	render(){
		return(
			<section id="reportsSection" className="reports">
				<div className="block__container">
					<div className="reports__container">
						<h2 className="reports__title">Posibilidad de generación de informes</h2>
						<div className="reports__description">
							<p className="reports__description--text">Accede a todos los indicadores integrando nuestra API en minutos ya sea para desarrollar herramientas online, informes en pdf o en Excel</p>
							<img className="reports__img-excel" src={excel} alt="excel"/>
							<a href="https://inversionesinmobiliarias.elmundo.es/common/docs/Ficha%20ejemplo.pdf" target="_blank" className="button--report" rel="noopener noreferrer">Descargar ejemplo</a>
							<img className="reports__img-preview" src={report} alt="Foto informes" width="250px" height="350px"/>
							<img className="reports__img-preview" src={report2} alt="Foto informes" width="250px" height="350px" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Reports;
