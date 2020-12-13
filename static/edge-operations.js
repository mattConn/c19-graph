const edgeHover = (link,svg) => {
    link.on('mouseover', function() {
        console.log(link)
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85')
            .style("cursor", "not-allowed");


    })

    link.on('click', function(d){
        d3.select(this).remove()
    })

}

export default edgeHover;
