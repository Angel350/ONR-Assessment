console.log("hello");

console.log(data.toString());

var dataset = JSON.parse(
    
)
console.log(dataset);

d3.json("users.json", function(data) {
    console.log(data);
});
var pie=d3.layout.pie()
        .value(function(d){return d.percent})
        .sort(null)
        .padAngle(.03);
 
var w=300,h=300;
 
var outerRadius=w/2;
var innerRadius=100;
 
var color = d3.scale.category10();
 
var arc=d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
 
var svg=d3.select("#chart")
        .append("svg")
        .attr({
            width:w,
            height:h,
            class:'shadow'
        }).append('g')
        .attr({
            transform:'translate('+w/2+','+h/2+')'
        });
var path=svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr({
            d:arc,
            fill:function(d,i){
                return color(d.data.name);
            }
        });