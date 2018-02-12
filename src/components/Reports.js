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
							<p className="reports__description--text">Accede a todos los indicadores integrando nuestra API en minutos ya sea para desarrollar herramientas online, informes en pdf o en Excel</p>
							<div className="reports_links">
								<a href="#" className="button--report">EXCEL</a>
								<a href="#" className="button--report">PDF</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Reports;
