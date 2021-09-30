import React from "react";
import { useState } from "react";

function Shape(props) {
    const [count, setcount] = useState(1)
    const drop = e => {
        e.preventDefault();
        if (count <= 10) {
            setcount(count + 1);
            const numid = e.dataTransfer.getData("numid");

            const num = document.getElementById(numid);
            num.style.display = "block";

            e.target.appendChild(num);

        } else {
            alert("Container exceeds the limit(maximum limit:10)");

        }
    }




    const dragOver = e => {
        e.preventDefault();
    }

    return ( <
        div className = 'shape-class' >

        <
        div className = "rectangle" >
        <
        div id = { props.id }
        onDrop = { drop }
        onDragOver = { dragOver }
        className = "rectangle-div" > <
        /div>  < /
        div >
        <
        div className = "parentCircle" >
        <
        div className = "childcircle1" > < /div> <
        div className = "childcircle2" > < /div> <
        div className = "childcircle3" > < /div>  < /
        div > <
        /div>  

    )
}

export default Shape;