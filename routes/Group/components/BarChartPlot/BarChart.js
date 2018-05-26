import React from 'react';
import * as d3 from 'd3';
/*
  NEED: npm install d3
*/

// data
const data = [
  {
    name:"DIY月餅挑戰入門",
    num: 1,
    value:[
      67, 75, 85, 108.5, 98, 129, 120.5, 119, 141.5
    ],
  },
  {
    name:"DIY月餅挑戰I",
    num: 2,
    value:[
      50,60,70,70,80,80,90
    ],
  },

  {
    name:"DIY月餅挑戰II",
    num: 3,
    value:[
      50,60,70,70,80,80,90,90,95,100,100
    ],
  },
  {
    name:"DIY月餅挑戰III",
    num:4,
    value:[
      50,60,70,70,80,80,90,90,40,30,20,20,20
    ],
  },
  {
    name:"DIY月餅挑戰IV",
    num:5,
    value:[
      15,15,15,15,15,15,15,15,15,15,15,15,
      15,15,15,15,15,15,15,15,15,15,15
    ],
  }
];

const dataValue = [];
const pathValue = [];
for (let i=0;i<data.length;i+=1) {
  for (let j=0;j<data[i].value.length;j+=1) {
    dataValue.push({
      num: data[i].num,
      x: data[i].value[j].x,
      y: data[i].value[j].y,
      isL: data[i].value[j].isL,
    });
    if (data[i].value[j].isL === 1) {
      pathValue.push({
        num: data[i].num,
        x: data[i].value[j].x,
        y: data[i].value[j].y,
      });
    }
  }
}

/* Main Structure */
class BarChart extends React.Component {
  componentDidMount(){
    // SVG's width & height, and margin size
    var svgwidth=575, svgheight=165, marlen = 3;
    // d3's writing style function
    var colorReturn = function(d){
      switch(d.num){
        case 1:
          return '#F76565';
          break;
        case 2:
          return '#90B761';
          break;
        case 3:
          return '#55A8A5';
          break;
        case 4:
          return '#7D6DFD';
          break;
        case 5:
        default:
          return '#E392C4';
          break;
      }
    };
    //BAR
      // root node
    const Chart = d3.select('#bar')
      .style('width',svgwidth.toString()+'px');
      // verticle bar
    Chart.selectAll('div')
      .data(dataValue).enter()
      .append('div')
      .style("display","inline-block")
      .style("position", "relative")
      .style("bottom","-2.7px")
      .style("left", function(d){return d.x+"px";})
      .style("background-color",colorReturn)
      .style("width","6.5px")
      .style("height",function(d){return d.y+"px";})
      .style("border-radius","15px 15px 0px 0px");
      // parallel bar
    Chart.append('div')
      .style("position",'relative')
      .style('top','0px')
      .style('left','0px')
      .style("background-color","#fff")
      .style("height","3px")
      .style("width", "573px")
      .style("opacity",0.43)
      .style("border-radius","25px");

    //LABEL
      // root node
    const labelbar = d3.select('#barlabel')
      .style('width',(svgwidth-marlen).toString()+'px')
      .style('height','20px')
      .style('position','relative')
      .style('left','0px')
      .style('bottom','0px')
      .style('display','flex')
      .style('justify-content','flex-start')
      .style('padding-top','10.3px');
      // five small container
    labelbar.selectAll('div')
      .data(data).enter()
      .append('div')
      .attr('class','labelitem')
      .style('display','flex')
      .style('justify-content','space-around')
      .style('align-items','center')
      .style('padding-left','4.5px')
      .style('padding-right','11.5px')
      .append('div') // color bar
      .style('width','30px')
      .style('height','5.5px')
      .style('border-radius','25px')
      .style('background-color', colorReturn);

    d3.selectAll('.labelitem')
      .append('div') // text
      .style('font-size','7.5px')
      .style('font-family','HelveticaNeue')
      .style('font-weight', 'bold')
      .style('font-style', 'normal')
      .style('font-stretch', 'normal')
      .style('line-height', '1.2')
      .style('letter-spacing', 'normal')
      .style('white-space','nowrap')
      .style('padding-left','6.5px')
      .text(function(d){
        return d.name;
      });

  }
    render(){
        return(
            <div>
              <div id="bar"></div>
              <div id="barlabel"></div>
            </div>
        );
    }
}

export default BarChart;
