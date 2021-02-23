d3.json('https://raw.githubusercontent.com/Angel350/ONR-Assessment/main/data1.json')
    .then(dataset => {
        // console.log(dataset.areaData["Quality Score"]);
    })


    // data = ["1", "2", "3"];
    // var enterSelection = d3.selectAll(".btn:nth-of-type("+2+")").selectAll('p').data(data).enter()
    
    // enterSelection.append('p').text(function(d, i) {return 'from data[' + i + ']'})
    // enterSelection.insert('p').text(function(d, i) {return 'from data[' + d + ']'})


for (let index = 0; index < dataset[0].gaugeData.length; index++) {
    
   

    // var currentGraph = dataset[0].gaugeData[index].name;
// console.log(currentGraph);

var duration = 1500,
    transition = 200,
    percent = 45,
    width = 100,
    height = 100;
console.log(percent);

  
// var dataset = {
//         lower: calcPercent(0),
//         upper: calcPercent(percent)
//     },
    upper=calcPercent(percent)
    lower=calcPercent(0);
    radius = Math.min(width, height) / 3,
    pie = d3.pie().sort(null),
    format = d3.format(".0%");

var arc = d3.arc()
    .innerRadius(radius * .8)
    .outerRadius(radius);

var svg = d3.select("#parent").select(".col-sm-4:nth-of-type("+index+")").select(".card").append("svg")

    .attr("width", width)
    .attr("height", height)
    // .attr("viewBox", "0 0 500 500")
    .style("display","flex")
    .append("g")
    .attr(
        "transform", 'translate('+width/2+','+height/2+')'
    );
  


    var path = svg.selectAll("path")
    .data(pie(lower))
    .enter().append("path")
    .attr("class", function (d, i) {
        return "color" + i
    })
    .attr("d", arc)
    .each(function (d) {
        this._current = d;
      
    });


var text = svg.append("text")
    .attr("text-anchor", "middle")
    // .attr("dy", ".3em");
    .style("font", "14px Aria")
    .style("margin","auto")

var progress = 0;

var timeout = setTimeout(function () {
    clearTimeout(timeout);
    path = path.data(pie(upper));
    path.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percent)
        this._current = i(0);
        return function (t) {
            text.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 200);

function calcPercent(percent) {
    return [percent, 100 - percent];
};

}



// var widths = [0, 500, 850];

// function resizeFn() {
// if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
// console.log("red");
// document.getElementsByClassName(".chart-container")[0].setAttribute("viewBox", "0 0 100 100"); 
// } else if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
// console.log("orange");
// document.getElementsByClassName(".chart-container")[0].setAttribute("viewBox", "0 0 200 200"); 
// } else {
// console.log("green");
// document.getElementsByClassName(".chart-container")[0].setAttribute("viewBox", "0 0 500 500"); 
// }
// }
// window.onresize = resizeFn;
// resizeFn();