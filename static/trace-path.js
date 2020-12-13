const tracePath = (link,node) => {
    // color each edge for infected-adjacent
    link.each(function (l) {
        let L = this;
        node.each(function (n) {
            if ((n.id == l.source || n.id == l.target) && n.infected)
                d3.select(L).style('stroke', 'red');
        })
    })
};

export default tracePath;