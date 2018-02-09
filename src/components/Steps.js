import React from 'react';
import madrid from '../images/madrid.jpg';

class Steps extends React.Component {
	render(){
		return(
			<section className="steps">
				<div className="block__container">
					<div className="steps__container">
						<img className="steps__img" src={madrid} width="100%" height="300px" />
					</div>
				</div>
			</section>
		)
	}
}

export default Steps;
