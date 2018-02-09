import React, { Component } from 'react';


class TestFetch extends Component {

	constructor(props){
		super(props);
	}



	// 	function createGetRequestAndDisplay (token, url, onSuccess) {
	// 		var xhr = new XMLHttpRequest();
	// 		xhr.open("GET", url, true);
	// 		xhr.setRequestHeader("Authorization", "Token " + token);
	// 		xhr.onreadystatechange = function(e) {
	// 			onResolveIndicatorsCall(e, onSuccess);
	// 		};
	// 		xhr.send();
	// 	};
	//
	// 	function onResolveIndicatorsCall(e, onSuccess) {
	//   if(e.currentTarget.readyState === 4) {
	//     if(e.currentTarget.status === 404) {
	//       console.error("Error: Uno o más parámetros proporcionados no son válidos.");
	//     }
	//     else if(e.currentTarget.status === 200) {
	//       onSuccess(JSON.parse(e.currentTarget.responseText));
	//     }
	//   }
	//   else if(e.currentTarget.readyState === 2 && e.currentTarget.status === 401) {
	//     console.error("Error: La apikey proporcionada no es válida");
	//   }
	// };
	//
	// function setCategorizedData(data) {
  // REQUEST_DATA["category"] = data;

//   checkIfDataIsReadyToDisplay();
// };


	render() {
		return (
			<div className="testfetch">

			</div>
		);
	}
}

export default TestFetch;
