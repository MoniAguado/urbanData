import React, { Component } from 'react';

class Indicators extends Component{
	constructor(props){
		super(props);

		//this.bind

		//this.state


	}

render(){

	return(
		<div className="indicators">
			<div className="indicators__container">
				<h3 className="indicators__title">
					<ul className="indicators__list">
						<li className="indicators__list--item"><img src="../images/madrid.jpg">

						</li>
							<li className="indicators__list--item"></li>
						<li className="indicators__list--item"></li>
					</ul>
				</h3>
			</div>
		</div>
	);


}




}

export default Indicators;
