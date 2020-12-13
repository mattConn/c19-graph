import handleNodeClick from './nodeclick.js';
import handleNodeHover from './nodehover.js';
import edgeHover from './edge-operations.js';

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 1000,
    height = 500;

// append the svg object to the body of the page
const svg = d3.select('#graph-ctn')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

// load json and init
d3.json('static/data.json', function (data) {


    // init links
    const link = svg
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .style('stroke', 'black')
        .style('stroke-width', '7');


    // Initialize the nodes
    const node = svg
        .selectAll('circle')
        .data(data.nodes)
        .enter()
        .append('circle')
        .attr('r', 20)
        .style('fill', '#69b3a2');

    // color each edge for infected-adjacent
    link.each(function (l) {
        let L = this;
        node.each(function (n) {
            if ((n.id == l.source || n.id == l.target) && n.infected)
                d3.select(L).style('stroke', 'red');
        })
    })



    // tooltip to display node data
    const tooltip = d3.select('body').append('div')
        .attr('class', 'node-tooltip')
        .style('opacity', 0);


    // handle node hover
    handleNodeHover(node, tooltip);

    // handle node click
    let coords = null;
    handleNodeClick(node, svg, coords);

    // handle edge hover
    edgeHover(link, svg)

    // display node ID
    const text = svg.selectAll('text')
        .data(data.nodes)
        .enter()
        .append('text');

    // graph layout
    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink()
            .id(function (d) { return d.id; })
            .links(data.links)
        )
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .on('end', ticked);

    simulation.force('forceX', d3.forceX(0))
        .force('forceY', d3.forceY(0));

    // updates nodes positions
    function ticked() {
        node
            .attr('cx', function (d) { return Math.max(6, Math.min(width - 6, d.x)); })
            .attr('cy', function (d) { return Math.max(6, Math.min(height - 6, d.y)); })

        link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });


        text
            .attr('x', function (d) { return Math.max(3, Math.min(width - 3, d.x)); })
            .attr('y', function (d) { return Math.max(3, Math.min(height - 3, d.y)); })
            .text((d) => d.id)
            .attr('font-family', 'sans-serif')
            .attr('font-size', '20px')
            .attr('fill', 'black');
    }

});