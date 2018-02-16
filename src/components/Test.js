import React from 'react';
//import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

class Test extends React.Component{

	render(){
		const config = {
		  xAxis: {
		    categories: ['2017Q1', '2017Q2', '2017Q3']
		  },
		  series: [{
				name: 'Municipio',
	      data: this.props.getChartMun
	    },{
	      name: 'Barrio',
	      data: this.props.getChartNeighborhood
	    }]
		}
		return(
	  	<div>
				<ReactHighcharts config = {config}></ReactHighcharts>
	    </div>
		);
	}
}

export default Test;
