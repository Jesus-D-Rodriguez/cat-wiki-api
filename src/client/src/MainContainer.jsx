import React from "react";
import "./MainContainer.css"
import SearchBar from "./SearchBar";

function MainContainer () {
    return <div className="main-cat-container">
        <div className="main-cat-container-img">
            <div className="main-cat-container-img-1">
                <div className="inside-cat-container-img-1">
                    <div>
                        <div className="logo-inverse-container">
                            CatWiki
                            <img src="../images/invertido.png" alt="" />
                        </div>
                        <div><p>Get to know more about your cat breed</p></div>
                        
                    </div>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                </div>

                <div>

                </div>

            </div>
            <div className="main-cat-container-img-2"></div>
        </div>
        <div className="main-cat-container-most-searched">

            <div className="most-searched">     
                <div>  <p>Most searched breeds</p></div>
                <div> <h2>66+ Breeds For you to discover</h2></div>
                <div></div>
            </div>
        </div>
    </div>

}

export default MainContainer; 