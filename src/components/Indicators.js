import React, { Component } from 'react';
import madrid from '../images/madrid.jpg';

class Indicators extends Component{
	//constructor(props){
	//	super(props);

		//this.bind

		//this.state


	//}

render(){

	return(
		<div className="indicators">
			<div className="indicators__container">
				<h3 className="indicators__title">
					Who let the dogs out?
				</h3>
					<ul className="indicators__list">
						<li className="indicators__list--item"><img src={madrid} alt="indicator1" className="indicators__list--item-img"/>
						</li>
						<li className="indicators__list--item"><img src={madrid} alt="indicator2" className="indicators__list--item-img" /></li>
						<li className="indicators__list--item"><img src={madrid} alt="indicator3" className="indicators__list--item-img"/></li>
					</ul>

			</div>
		</div>
	);


}




}

export default Indicators;
