const handleNodeClick = (node)=>{
    node.on('click', function(){
        let active = d3.select(this).attr('active');

        d3.select(this).attr('stroke', active == 'true' ? 'none' : 'red').attr('stroke-width','3')
            .attr('active',active == 'true' ? 'false' : 'true');
        console.log(d3.select(this).data()[0].id);
    }) 
}

export default handleNodeClick;