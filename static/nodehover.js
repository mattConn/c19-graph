const handleNodeHover = (node,tooltip) => {
    node.on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85');

        // display node data, follow mouse
        tooltip.transition()
            .duration(50)
            .style('opacity', 1);

        tooltip.html(`<p>${d.name}, ${d.age}</p>${d.infected ? '<p>Infected</p>' : ''}`)
            .style('left', (d3.event.pageX + 10) + 'px')
            .style('top', (d3.event.pageY - 15) + 'px');

    })

    node.on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1');

        tooltip.transition()
            .duration(50)
            .style('opacity', 0);
    })
};

export default handleNodeHover;