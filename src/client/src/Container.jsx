import React from "react"
import "./Container.css"
import Top from "./Top.jsx"
import MainContainer from "./MainContainer";

function Container () {
    return (<div className="container">
        <div className="container-1">
            <Top></Top>
            <MainContainer></MainContainer>
        </div>
        <div>

        </div>
    </div>);
}

export default Container;