import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<section className="contact">
				<div className="block__container">
					<button className="button button--contact" onClick={this.props.openCoupon}>CONTACTA CON NOSOTROS</button>
				</div>
			</section>
		)
	}
}

export default Contact;
