d3.json('https://raw.githubusercontent.com/Angel350/ONR-Assessment/main/data1.json')
    .then(dataset => {
        // console.log(dataset.areaData["Quality Score"]);
    })


    // data = ["1", "2", "3"];
    // var enterSelection = d3.selectAll(".btn:nth-of-type("+2+")").selectAll('p').data(data).enter()
    
    // enterSelection.append('p').text(function(d, i) {return 'from data[' + i + ']'})
    // enterSelection.insert('p').text(function(d, i) {return 'from data[' + d + ']'})

    var percentages = [];
    function calcPercent(percent) {
        return [percent, 100 - percent];
    };
    


   for (let index = 0; index < dataset[0].gaugeData.length; index++) {
       
    percentages.push(dataset[0].gaugeData[index].score)
       
   };
   console.log(percentages);

    // var currentGraph = dataset[0].gaugeData[index].name;
// console.log(currentGraph);


//#region firstGraph

var duration = 1500,
    transition = 200,
    // percentages = 45,
    width = 100,
    height = 100;


  
    upper=calcPercent(percentages[0])
    lower=calcPercent(0);
    radius = Math.min(width, height) / 3,
    pie = d3.pie().sort(null),
    format = d3.format(".0%");

var arc = d3.arc()
    .innerRadius(radius * .8)
    .outerRadius(radius);

var svg1 = d3.select("#parent").select(".col-sm-4:nth-of-type("+1+")").select(".card").append("svg")

    .attr("width", width)
    .attr("height", height)
    // .attr("viewBox", "0 0 500 500")
    .style("display","flex")
    .append("g")
    .attr(
        "transform", 'translate('+width/2+','+height/2+')'
    );


    var path1 = svg1.selectAll("path")
    .data(pie(lower))
    .enter().append("path")
    .attr("class", function (d, i) {
        return "color" + i
    })
    .attr("d", arc)
    .each(function (d) {
        this._current = d;
      
    });



var text1 = svg1.append("text")
    .attr("text-anchor", "middle")
    // .attr("dy", ".3em");
    .style("font", "14px Aria")
    .style("margin","auto")

var progress = 0;

var timeout = setTimeout(function () {
    clearTimeout(timeout);
    path1 = path1.data(pie(upper));
    path1.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percentages[0])
        this._current = i(0);
        return function (t) {
            text1.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 60);


//#endregion


//#region secondGraph


var duration = 1500,
    transition = 200,
    width = 100,
    height = 100;


upper=calcPercent(percentages[1])
lower=calcPercent(0);
radius = Math.min(width, height) / 3,
pie = d3.pie().sort(null),
format = d3.format(".0%");

var arc = d3.arc()
.innerRadius(radius * .8)
.outerRadius(radius);

var svg2 = d3.select("#parent").select(".col-sm-4:nth-of-type("+2+")").select(".card").append("svg")
.attr("width", width)
.attr("height", height)
// .attr("viewBox", "0 0 500 500")
.style("display","flex")
.append("g")
.attr(
    "transform", 'translate('+width/2+','+height/2+')'
);



var path2 = svg2.selectAll("path")
.data(pie(lower))
.enter().append("path")
.attr("class", function (d, i) {
    return "color" + i
})
.attr("d", arc)
.each(function (d) {
    this._current = d;
  
});




var text2 = svg2.append("text")
.attr("text-anchor", "middle")
// .attr("dy", ".3em");
.style("font", "14px Aria")
.style("margin","auto")

var progress2 = 0;

var timeout = setTimeout(function () {
clearTimeout(timeout);
path2 = path2.data(pie(upper));
path2.transition().duration(duration).attrTween("d", function (a) {
    var i = d3.interpolate(this._current, a);
    var i2 = d3.interpolate(progress2, percentages[1])
    this._current = i(0);
    return function (t) {
        text2.text(format(i2(t) / 100));
        return arc(i(t));
    };
});
}, 50);


//#endregion




//#region thirdGraph


var duration = 1500,
    transition = 200,
    width = 100,
    height = 100;


upper=calcPercent(percentages[2])
lower=calcPercent(0);
radius = Math.min(width, height) / 3,
pie = d3.pie().sort(null),
format = d3.format(".0%");

var arc = d3.arc()
.innerRadius(radius * .8)
.outerRadius(radius);

var svg3 = d3.select("#parent").select(".col-sm-4:nth-of-type("+3+")").select(".card").append("svg")
.attr("width", width)
.attr("height", height)
// .attr("viewBox", "0 0 500 500")
.style("display","flex")
.append("g")
.attr(
    "transform", 'translate('+width/2+','+height/2+')'
);



var path3 = svg3.selectAll("path")
.data(pie(lower))
.enter().append("path")
.attr("class", function (d, i) {
    return "color" + i
})
.attr("d", arc)
.each(function (d) {
    this._current = d;
  
});




var text3 = svg3.append("text")
.attr("text-anchor", "middle")
// .attr("dy", ".3em");
.style("font", "14px Aria")
.style("margin","auto")

var progress3 = 0;

var timeout = setTimeout(function () {
clearTimeout(timeout);
path3 = path3.data(pie(upper));
path3.transition().duration(duration).attrTween("d", function (a) {
    var i = d3.interpolate(this._current, a);
    var i2 = d3.interpolate(progress3, percentages[2])
    this._current = i(0);
    return function (t) {
        text3.text(format(i2(t) / 100));
        return arc(i(t));
    };
});
}, 40);


//#endregion



//#region fourthGraph


var duration = 1500,
    transition = 200,
    width = 100,
    height = 100;


upper=calcPercent(percentages[3])
lower=calcPercent(0);
radius = Math.min(width, height) / 3,
pie = d3.pie().sort(null),
format = d3.format(".0%");

var arc = d3.arc()
.innerRadius(radius * .8)
.outerRadius(radius);

var svg4 = d3.select("#parent").select(".col-sm-4:nth-of-type("+4+")").select(".card").append("svg")
.attr("width", width)
.attr("height", height)
// .attr("viewBox", "0 0 500 500")
.style("display","flex")
.append("g")
.attr(
    "transform", 'translate('+width/2+','+height/2+')'
);



var path4 = svg4.selectAll("path")
.data(pie(lower))
.enter().append("path")
.attr("class", function (d, i) {
    return "color" + i
})
.attr("d", arc)
.each(function (d) {
    this._current = d;
  
});




var text4 = svg4.append("text")
.attr("text-anchor", "middle")
// .attr("dy", ".3em");
.style("font", "14px Aria")
.style("margin","auto")

var progress4 = 0;

var timeout = setTimeout(function () {
clearTimeout(timeout);
path4 = path4.data(pie(upper));
path4.transition().duration(duration).attrTween("d", function (a) {
    var i = d3.interpolate(this._current, a);
    var i2 = d3.interpolate(progress4, percentages[3])
    this._current = i(0);
    return function (t) {
        text4.text(format(i2(t) / 100));
        return arc(i(t));
    };
});
}, 30);


//#endregion




//#region fifthGraph


var duration = 1500,
    transition = 200,
    width = 100,
    height = 100;


upper=calcPercent(percentages[4])
lower=calcPercent(0);
radius = Math.min(width, height) / 3,
pie = d3.pie().sort(null),
format = d3.format(".0%");

var arc = d3.arc()
.innerRadius(radius * .8)
.outerRadius(radius);

var svg5 = d3.select("#parent").select(".col-sm-4:nth-of-type("+5+")").select(".card").append("svg")
.attr("width", width)
.attr("height", height)
// .attr("viewBox", "0 0 500 500")
.style("display","flex")
.append("g")
.attr(
    "transform", 'translate('+width/2+','+height/2+')'
);



var path5 = svg5.selectAll("path")
.data(pie(lower))
.enter().append("path")
.attr("class", function (d, i) {
    return "color" + i
})
.attr("d", arc)
.each(function (d) {
    this._current = d;
  
});




var text5 = svg5.append("text")
.attr("text-anchor", "middle")
// .attr("dy", ".3em");
.style("font", "14px Aria")
.style("margin","auto")

var progress5 = 0;

var timeout = setTimeout(function () {
clearTimeout(timeout);
path5 = path5.data(pie(upper));
path5.transition().duration(duration).attrTween("d", function (a) {
    var i = d3.interpolate(this._current, a);
    var i2 = d3.interpolate(progress5, percentages[4])
    this._current = i(0);
    return function (t) {
        text5.text(format(i2(t) / 100));
        return arc(i(t));
    };
});
}, 20);


//#endregion



//#region sixthGraph


var duration = 1500,
    transition = 200,
    width = 100,
    height = 100;


upper=calcPercent(percentages[5])
lower=calcPercent(0);
radius = Math.min(width, height) / 3,
pie = d3.pie().sort(null),
format = d3.format(".0%");

var arc = d3.arc()
.innerRadius(radius * .8)
.outerRadius(radius);

var svg6 = d3.select("#parent").select(".col-sm-4:nth-of-type("+6+")").select(".card").append("svg")
.attr("width", width)
.attr("height", height)
// .attr("viewBox", "0 0 500 500")
.style("display","flex")
.append("g")
.attr(
    "transform", 'translate('+width/2+','+height/2+')'
);



var path6 = svg6.selectAll("path")
.data(pie(lower))
.enter().append("path")
.attr("class", function (d, i) {
    return "color" + i
})
.attr("d", arc)
.each(function (d) {
    this._current = d;
  
});




var text6 = svg6.append("text")
.attr("text-anchor", "middle")
// .attr("dy", ".3em");
.style("font", "14px Aria")
.style("margin","auto")

var progress6 = 0;

var timeout = setTimeout(function () {
clearTimeout(timeout);
path6 = path6.data(pie(upper));
path6.transition().duration(duration).attrTween("d", function (a) {
    var i = d3.interpolate(this._current, a);
    var i2 = d3.interpolate(progress6, percentages[5])
    this._current = i(0);
    return function (t) {
        text6.text(format(i2(t) / 100));
        return arc(i(t));
    };
});
}, 10);


//#endregion


