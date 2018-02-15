import React from 'react';
import premio1 from './../images/aci-logo.png';
import premio2 from './../images/mipim-logo.png';
import premio3 from './../images/odine-logo.png';

class Awards extends React.Component {
	render(){
		return(
			<section className="awards" id="awards">
				<div className="block__container">
					<div className="awards__container">
						<h2 className="awards__text">Estás en buena compañía:</h2>
						<div className="awards__container-img">
							<img src={premio1} alt="premio 1" className="awards-img" />
							<img src={premio2} alt="premio 2" className="awards-img" />
							<img src={premio3} alt="premio 3" className="awards-img" />
						</div>
					</div>
				</div>
			</section>

				)
	}
}

export default Awards;
