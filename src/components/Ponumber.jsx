import React from "react";



function Ponumber(props) {


    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData("numid", target.id);
    }

    return (

        <
        div id = { props.id }
        draggable = { props.draggable }
        onDragStart = { dragStart } > { props.children } <
        /div>

    );


}



export default Ponumber;