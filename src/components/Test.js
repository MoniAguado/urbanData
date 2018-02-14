// import React, { Component } from 'react';

import data from '../token.json';

var Highcharts = require('highcharts'),
    addFunnel = require('highcharts/modules/funnel');
// After window is present, normally on componentDidMount or in the callback of ReactDOM.render
addFunnel(Highcharts);

	var React = require('react'),
	    Highcharts = require('highcharts');
	module.exports = React.createClass({
	    // When the DOM is ready, create the chart.
	    componentDidMount: function () {
	        // Extend Highcharts with modules
	        if (this.props.modules) {
	            this.props.modules.forEach(function (module) {
	                module(Highcharts);
	            });
	        }
	        // Set container which the chart should render to.
	        this.chart = new Highcharts[this.props.type || "Chart"](
	            this.props.container,
	            this.props.options
	        );
	    },
	    //Destroy chart before unmount.
	    componentWillUnmount: function () {
	        this.chart.destroy();
	    },
	    //Create the div which the chart will be rendered to.
	    render: function () {
	        return React.createElement('div', { id: this.props.container });
					element = React.createElement(Chart, { container: 'chart', options: options });
ReactDOM.render(element, document.getElementById('react-app'));
	    }
	});

export default React;
