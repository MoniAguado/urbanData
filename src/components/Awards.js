import React from 'react';
import premio1 from './../images/aci-logo.png';
import premio2 from './../images/mipim-logo.png';
import premio3 from './../images/odine-logo.png';

class Awards extends React.Component {
	render(){
		return(
			<section className="awards" id="awards">
				<div className="block__container">
					<div className="awards__background">
						<div className="awards__container">
							<h2 className="awards__text">Estás en buena compañía:</h2>
							<div className="awards__container-img">
								<a href="https://www.mipim.com/startup-competition/" className="awards__link" alt="Mipim Awards" target="_blank"><img src={premio1} alt="premio 1" className="awards-img" /></a>
								<a href="http://www.consultorasinmobiliarias.es/assets/documents/161124_NP%20Entrega%20Premios%20ACI.pd" className="awards__link" alt="Premios ACI" target="_blank"><img src={premio2} alt="premio 2" className="awards-img" /></a>
								<a href="https://opendataincubator.eu/category/urbandataanalytics/" className="awards__link" alt="ODINE" target="_blank"><img src={premio3} alt="premio 3" className="awards-img" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}
}

export default Awards;
