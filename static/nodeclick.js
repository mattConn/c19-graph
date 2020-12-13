import edgeHover from './edge-operations.js';

const handleNodeClick = (node, svg, coords) => {
    node.on('click', function () {
        let active = d3.select(this).attr('active');

        // two nodes selected, add edge
        if (coords != null) {
            const link = svg.append('line')
                .style("stroke", "black")
                .style('stroke-width', '7')
                .attr("x1", d3.select(this).attr('cx'))
                .attr("y1", d3.select(this).attr('cy'))
                .attr("x2", coords.x)
                .attr("y2", coords.y);

            edgeHover(link, svg)
            coords = null; // reset coords

            // reset node stroke/active attr
            d3.select(this).attr('stroke', 'none').attr('stroke-width', '3')
                .attr('active', 'false');

        } else {
            // toggle node selection
            // toggle stroke and active attr
            d3.select(this).attr('stroke', active == 'true' ? 'none' : 'red').attr('stroke-width', '3')
                .attr('active', active == 'true' ? 'false' : 'true');

            // store coords
            coords = {
                x: d3.select(this).attr('cx'),
                y: d3.select(this).attr('cy')
            }
        }

    })
}

export default handleNodeClick;