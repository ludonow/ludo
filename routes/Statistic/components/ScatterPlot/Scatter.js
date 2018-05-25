import React from 'react';
import styled from 'styled-components';
import * as d3 from "d3";
/*
	NEED: npm install d3
*/

//data
var data = [
	{
		name:"雙方皆完成",
		num:1,
		value:[
			{x: 80, y:70, isL:0},
			{x: 88, y:84, isL:0},
			{x: 95, y:68, isL:0},
			{x: 78, y:87, isL:0},
			{x: 100, y:100, isL:0},
		],
	},
	{
		name:"單方完成",
		num:2,
		value:[
			{x: 80, y:10, isL:0},
			{x: 78, y:15, isL:1},
			{x: 83, y:8 , isL:0},
			{x: 77, y:12, isL:1},
			{x: 85, y:4 , isL:0},
			{x: 8 , y:88, isL:0},
			{x: 12, y:76, isL:0},
			{x: 9 , y:81, isL:0},
			{x: 14, y:83, isL:1},
			{x: 7 , y:77, isL:1},
		],
	},
	{
		name:"雙方皆未完成",
		num:3,
		value:[
			{x: 25, y:10, isL:0},
			{x: 16, y:17, isL:0},
			{x: 35, y:22, isL:0},
			{x: 26, y:31, isL:0},
			{x: 0 , y:0 , isL:0},
		],
	},
]

var dataValue = [];
var pathValue = [];
for(let i=0;i<data.length;i++){
	for(let j=0;j<data[i].value.length;j++){
		dataValue.push({
			num: data[i].num,
			x: data[i].value[j].x,
			y: data[i].value[j].y,
			isL: data[i].value[j].isL,
		});
		if(data[i].value[j].isL==1){
				pathValue.push({
				num: data[i].num,
				x: data[i].value[j].x,
				y: data[i].value[j].y,
			});
		}
	}
}


/* Main Structure */
class Scatter extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(d) {
		alert(d.y);
	}
	componentDidMount(){
		// Range Domain
		var mar = 20;
		var xAxis = d3.scaleLinear()
			.range([230,0])
			.domain([100,0]);
		var yAxis = d3.scaleLinear()
			.range([230,0])
			.domain([100,0]);
		// Color Set
		var TypeColor = function(d){
			switch(d.num){
				case 1:
					return '#ef3f3f';
					break;
				case 2:
					return '#ffffff';
					break;
				case 3:
					return '#5da785';
					break;
			}
		}
		/*main scructure*/
		var scatChart = d3.select('#scatterchart')
			.style('display','flex')
			.style('justify-content','flex-start')
			.style('align-items','flex-end')
			.style('min-width','370px');
		/*point picture*/
		scatChart.append('svg')
			.attr('class','svg')
			.attr('width',240.7)
			.attr('height',240.7)
			.attr('padding-top',mar)
			.attr('padding-left',mar)
			.style('border-right','1.5px solid rgba(255,255,255,0.43)')
			.style('border-bottom','1.5px solid rgba(255,255,255,0.43)');
		//point
		var pic = d3.select('.svg');
		pic.selectAll()
			.data(dataValue).enter()
			.append('circle')
				.attr('r',3)
				.attr('cx',function(d){return 234-xAxis(d.x);})
				.attr('cy',function(d){return 234-yAxis(d.y);})
				.style('fill',TypeColor)
				.on("click", (d)=>{
					alert(d.y);
				});
		//path
		var line = d3.line()
			.x(function(d){return 234-xAxis(d.x);})
			.y(function(d){return 234-yAxis(d.y);});
		pic.append('path')
			.attr('d',line(pathValue))
			.attr('stroke',"#707070")
			.attr('fill','none')
			.attr('stroke-width','0,5');
		/* label */
		scatChart.append('div').attr('class','label');
		d3.select('.label').append('ul')
			.attr('class','unorder')
			.style('padding-left','25px')
			.style('font-size','18px')
			.style('list-style-type','disc');

		var label = d3.select('.unorder');
		label.selectAll('li')
			.data(data).enter()
			.append('li').style("color", TypeColor)
			.append('span').text(function(d){return d.name})
				.style('font-size', '13px')
				.style('font-family', 'HelveticaNeue')
				.style('font-weight', 'normal')
				.style('font-style', 'normal')
  				.style('font-stretch', 'normal')
  				.style('line-height', 1.2)
				.style('letter-spacing', 'normal');

	}
    render() {
        return(
        	<div id="scatterchart"></div>
        );
    }
}
export default Scatter;