import React, { Component } from 'react';

class Salestime extends Component {
	render() {
		const defaultSalesTimeNeighbourhood = 13.98;
		const defaultSalesTimeDistrict = 16.34;


		return (
			<div className="salesTime">
				<div className="salestime__container">
					<h3 className="graphic__title">Tiempo de venta</h3>

					<div className="salestime__all-data">
						<div className="salestime__data">
							<h6 className="salestime__data--title">Barrio</h6>

							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeNeighbourhood.toLocaleString() || defaultSalesTimeNeighbourhood}  semanas </span></p>

						</div>
						<div className="salestime__data">
							<h6 className="salestime__data--title">Ciudad</h6>

							<p className="salestime__data--number">	<span className="salestime_value">{this.props.salesTimeDistrict.toLocaleString() || defaultSalesTimeDistrict}  semanas </span></p>

						</div>
					</div>

					<p className="salestime__text">*Semanas estimadas para la venta de un inmueble en el último trimestre.</p>

				</div>
			</div>
		);
	}
}

export default Salestime;
