import React from "react"
import Ponumber from "./components/Ponumber"
import Shape from "./components/Shape"


function App() {
    return (


        <
        div className = "parent-class" >
        <
        div className = "Ponumber-class" >
        <
        h1 className = "poHeading" > Po Number < /h1>  <
        Ponumber id = "1"
        draggable = "true" > < p > #123455</p>< /Ponumber > <
        Ponumber id = "2"
        draggable = "true" > < p > #543221 </p></Ponumber>
        <
        Ponumber id = "3"
        draggable = "true" > < p > #123455 </p></Ponumber>
        <
        Ponumber id = "4"
        draggable = "true" > < p > #762371 </p></Ponumber>
        <
        Ponumber id = "5"
        draggable = "true" > < p > #392880 </p></Ponumber>
        <
        Ponumber id = "6"
        draggable = "true" > < p > #123455 </p></Ponumber>
        <
        Ponumber id = "7"
        draggable = "true" > < p > #901561 </p></Ponumber>
        <
        Ponumber id = "8"
        draggable = "true" > < p > #123455 </p></Ponumber>
        <
        Ponumber id = "9"
        draggable = "true" > < p > #920103 </p></Ponumber>
        <
        Ponumber id = "10"
        draggable = "true" > < p > #123455 </p></Ponumber>
        <
        Ponumber id = "11"
        draggable = "true" > < p > #111455 </p></Ponumber>
        <
        /div>   
        <div className= "container-class" >
        <
        h1 className = "container-heading" > Container < /h1>  <
        Shape > < /Shape > <
        Shape > < /Shape > <
        Shape > < /Shape > < /
        div >

        <
        /div>
    );
}

export default App;