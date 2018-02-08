import React from 'react';

class Info extends React.Component {
	render () {
		return (
			<section className="info">
				<div className="info__container">
					<div className="info__details--description">
						<p className="info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p className="info__text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					<div className="info__details--action">
						<h2 className="info__title">¿Quieres saber como integrar las APIs de uDA en tu empresa?</h2>
						<button className="button__primary">Contacta con nosotros</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Info;
