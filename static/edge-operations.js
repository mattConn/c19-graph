const edgeHover = (link,svg, tooltip) => {
    link.on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85')
            .style("cursor", "not-allowed");


    })

    link.on('click', function(d){
        svg.selectAll("line")
        .filter(function() {
            return d3.select(this).attr("x1") == d.source.x && d3.select(this).attr("x2") == d.target.x  ; // filter by source and targets x point
        })
        .remove();
    })

}

export default edgeHover;
