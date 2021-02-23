d3.json('https://raw.githubusercontent.com/Angel350/ONR-Assessment/main/data1.json')
    .then(dataset => {
        // console.log(dataset.areaData["Quality Score"]);
    })



// var pie=d3.pie()
// .value(function(d){return d.gaugeData.score;})
// .sort(null)
// .padAngle(.03);

// console.log(d);

// var w=300,h=300;

// var outerRadius=w/2;
// var innerRadius=100;

// var color = d3.scaleOrdinal(d3.schemeCategory10());

// var arc=d3.arc()
//     .outerRadius(outerRadius)
//     .innerRadius(innerRadius);

// var svg=d3.select("#chart")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h)   
//     .attr("class", 'shadow')
//     .append('g')
        
//     .attr(
//         "transform", 'translate('+w/2+','+h/2+')'
//     );
// var path=svg.selectAll('path')
//     .data(pie(dataset))
//     .enter()
//     .append('path')
//     .attr("d",arc)
//     .attr("fill",function(d,i){
//             return color(d.data.name);
//         }
//     );

// path.transition()
//     .duration(1000)
//     .attrTween('d', function(d) {
//         var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
//         return function(t) {
//             return arc(interpolate(t));
//         };
//     });


// var restOfTheData=function(){
// var text=svg.selectAll('text')
//         .data(pie(dataset))
//         .enter()
//         .append("text")
//         .transition()
//         .duration(200)
//         .attr("transform", function (d) {
//             return "translate(" + arc.centroid(d) + ")";
//         })
//         .attr("dy", ".4em")
//         .attr("text-anchor", "middle")
//         .text(function(d){
//             return d.data.percent+"%";
//         })
//         .style({
//             fill:'#fff',
//             'font-size':'10px'
//         });

// var legendRectSize=20;
// var legendSpacing=7;
// var legendHeight=legendRectSize+legendSpacing;


// var legend=svg.selectAll('.legend')
//         // .data(color.domain())
//         .enter()
//         .append('g')
//         .attr("class", 'legend')
//         .attr( "transform", function(d,i){
//                 //Just a calculation for x & y position
//                 return 'translate(-35,' + ((i*legendHeight)-65) + ')';
            
//         });
// legend.append('rect')
//         .attr("width",legendRectSize)
//         .attr("height",legendRectSize)
//         .attr("rx",20)
//         .attr("ry",20)
//         .style("fill",color)
//         .style("stroke",color);

// legend.append('text')
//         .attr("x",30)
//         .attr("y",15)
        
//         .text(function(d){
//             return d;
//         })
//         .style("fill",'#929DAF')
//         .style('font-size','14px')
        
// };

// setTimeout(restOfTheData,1000);



// var pie=d3.layout.pie()
//         .value(function(d){return d.percent})
//         .sort(null)
//         .padAngle(.03);

// var w=300,h=300;

// var outerRadius=w/2;
// var innerRadius=100;

// var color = d3.scale.category10();

// var arc=d3.svg.arc()
//         .outerRadius(outerRadius)
//         .innerRadius(innerRadius);

// var svg=d3.select("#chart")
//         .append("svg")
//         .attr({
//             width:w,
//             height:h,
//             class:'shadow'
//         }).append('g')
//         .attr({
//             transform:'translate('+w/2+','+h/2+')'
//         });
// var path=svg.selectAll('path')
//         .data(pie(data))
//         .enter()
//         .append('path')
//         .attr({
//             d:arc,
//             fill:function(d,i){
//                 return color(d.data.name);
//             }
//         });



// var dataset = [
//     { name: 'Direct', count: 2742 },
//     { name: 'Facebook', count: 2242 },

// ];

var total=0;

// dataset.forEach(function(d){
//     total = d.gaugeData.score;
//     // console.log(d.gaugeData[0].score);
// });

// console.log(dataset[0].gaugeData.length);

for (let index = 0; index < dataset[0].gaugeData.length; index++) {
    total = dataset[0].gaugeData[index].score;
    console.log(dataset[0].gaugeData[index].score);
    
    
}


var pie=d3.pie()
        .value(function(d){return dataset[0].gaugeData[2].score})
        .sort(null);

var w=100,h=100;

var outerRadiusArc=w/2;
var innerRadiusArc=50;
var shadowWidth=10;

var outerRadiusArcShadow=innerRadiusArc+1;
var innerRadiusArcShadow=innerRadiusArc-shadowWidth;

var color = d3.scaleOrdinal()
 .range(['#41B787', '#6352B9', '#B65480', '#D5735A', '#D7D9DA']);



var svg = d3.selectAll(".widget")
        .append("svg")
        .attr("viewBox", "0 0 300 600")
        // .attr( "width",w)
        // .attr("height",h)
        .attr("class",'shadow')
        
        .append('g')
        .attr(
            "transform", 'translate('+w/2+','+h/2+')'
        );


var createChart=function(svg,outerRadius,innerRadius,fillFunction,className){

    var arc=d3.arc()
            .innerRadius(outerRadius)
            .outerRadius(innerRadius);

    var path=svg.selectAll('.'+className)
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr("class",className)
            .attr("d",arc)
            .attr("fill",fillFunction)
            

    path.transition()
            .duration(1000)
            .attrTween('d', function(d) {
                var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
                return function(t) {
                    return arc(interpolate(t));
                };
            });
};

createChart(svg,outerRadiusArc,innerRadiusArc,function(d,i){
    return color(d.data.name);
},'path1');

createChart(svg,outerRadiusArcShadow,innerRadiusArcShadow,function(d,i){
    var c=d3.hsl(color(d.data.name));
    return d3.hsl((c.h+5), (c.s -.07), (c.l -.15));
},'path2');

var addText= function (text,y,size) {
    svg.append('text')
            .text(text)
            .attr('text-anchor','middle')
            .attr("y",y)
            .style("fill",'#929DAF')
            .style('font-size',size)
            
};

var restOfTheData=function(){

    addText(function(){
        return numberWithCommas(total);
    },0,'30px');


    addText(function(){
        return "Page View";
    },25,'10px');

};

setTimeout(restOfTheData,1000);


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}