// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select('#graph-ctn')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform',
        `translate(${margin.left}, ${margin.top})`);

d3.json('static/data.json', function (data) {

    // init links
    const link = svg
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .style('stroke', 'black')

    // display node data
    const div = d3.select('body').append('div')
        .attr('class', 'node-tooltip')
        .style('opacity', 0);

    // Initialize the nodes
    const node = svg
        .selectAll('circle')
        .data(data.nodes)
        .enter()
        .append('circle')
        .attr('r', 20)
        .style('fill', '#69b3a2');

    // node hover
    node.on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85');

        // display node data, follow mouse
        div.transition()
            .duration(50)
            .style('opacity', 1);

        div.html(`<p>${d.name}, ${d.age}</p>${d.infected ? '<p>Infected</p>':''}`)
        .style('left', (d3.event.pageX + 10) + 'px')
        .style('top', (d3.event.pageY - 15) + 'px');

    })

    node.on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1');

        div.transition()
            .duration(50)
            .style('opacity', 0);
    })

    // handle click
    node.on('click', function(){

        d3.select(this).attr('stroke', 'black').attr('stroke-width','3');
        console.log(d3.select(this).data()[0].id);
    })

    // display node ID
    const text = svg.selectAll('text')
        .data(data.nodes)
        .enter()
        .append('text');


    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink()
            .id(function (d) { return d.id; })
            .links(data.links)
        )
        .force('charge', d3.forceManyBody().strength(-400))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .on('end', ticked);

    // updates nodes positions
    function ticked() {
        link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });

        node
            .attr('cx', function (d) { return d.x + 6; })
            .attr('cy', function (d) { return d.y - 6; });

        text
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .text((d) => d.id)
            .attr('font-family', 'sans-serif')
            .attr('font-size', '20px')
            .attr('fill', 'black');
    }

});