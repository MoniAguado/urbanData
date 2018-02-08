import React, { Component } from 'react';
import TestFetch from './TestFetch.js';

class Demo extends Component{
constructor(props){
	super(props);

	this.state ={
		cities: ''
	}
}

	componentDidMount(){
		fetch('http://reds.urbandataanalytics.com/reds/api/v1.0/')
		.then(response => response.json())
		.then(json => {
			const myArray = json
			this.setState({
				cities: myArray
			});
			console.log(this.state.cities);
		})
	}

render(){
	return(
		<section className="demo">
			<div className="demo__container">
				<TestFetch />
			</div>
		</section>
	);
}

}

export default Demo;
