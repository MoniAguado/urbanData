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
	    data: [29.9, 71.5, 106.4]
		 

	  }]
	};

		return(
    <div>
			<ReactHighcharts config = {config}></ReactHighcharts>
    </div>
	);
}
}

export default Test;
