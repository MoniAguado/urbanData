import React, { Component } from 'react';
import data from '../token.json';

class Income extends Component {

	render() {
		return (
			<div className="homeIncome">
				<div className="income__container">
					<div className="show_income">
						<h4 className="show_income_title">Renta media por hogar</h4>
						<span className="income_value">{this.props.incomeNeighborhood.toLocaleString()}  €/año</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Income;
