import React,{useEffect} from "react";
import "./Container.css"
import "./CatPage.css";
import Top from "./Top";
import Bottom from "./Bottom";

function CatPage () {
    useEffect(() => {
        // Cambiar la altura del body
        document.body.style.height = '170vh';
        document.documentElement.style.height = '100vh';
    
        // Restaurar la altura cuando el componente se desmonte
        return () => {
          document.body.style.height = 'auto';
          document.documentElement.style.height = 'auto';
        };
      }, []);
    return (<div className="container" id="container-cat-page">
        <div className="container-1">
            <Top></Top>
            <div className="container-1-container">
                <div className="container-1-image">                    
                    <div className="img-container" id="left">
                        <img src="https://cdn2.thecatapi.com/images/cko.jpg" alt="" />

                    </div>

                    </div>
                <div> 
                    <div className="container-1-traits">
                        <h2>Bengal</h2>
                        <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                       
                       <div><p className="traits"> Temperament:</p>  <p className="trait">Alert, Agile, Energetic, Demanding, Intelligent</p></div>
                        <div><p className="traits">Origin:</p> <p className="trait">United States</p></div>
                        <div><p className="traits">Life Span:</p> <p className="trait">12 - 15 years</p></div>
                        <div><p className="traits">Adaptability:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>
                        <div><p className="traits">Affection level:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div> </div>
                        <div><p className="traits">Child friendly:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>
                        <div><p className="traits">Grooming:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>
                        <div><p className="traits">Intelligence:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div> </div>
                        <div><p className="traits">Health issues:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div> </div>
                        <div><p className="traits">Social needs:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>
                        <div><p className="traits">Stranger friendly:</p> <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>

                    </div> 
                </div>
            </div>
        </div>
        
        <div className="container-2" id="container-2-cat-page"> 
        <div className="container-2-other-photos">
            <div className="container-2-text-row">
                <h2>Other photos</h2>
            </div>
            
            <div className="container-2-photos-row">
            <div className="img-container" id="left">
                        <div id="first-image">
                        <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt="" />
                        </div>

            </div>
                    <div className="img-container" id="right">
                        <img src="https://cdn2.thecatapi.com/images/9ha.jpg" alt="" />

                        
                    </div>
                  
                
                    <div className="img-container" id="left">
                        <img src="https://cdn2.thecatapi.com/images/cko.jpg" alt="" />

                    </div>
                    <div className="img-container" id="right">
                        <img src="https://cdn2.thecatapi.com/images/251.jpg" alt="" />

                    </div>
            </div>
            <div className="container-2-photos-row" id="photos-2">

            
            <div className="img-container" id="left">
                        <div id="first-image">
                        <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt="" />
                        </div>

            </div>
                    <div className="img-container" id="right">
                        <img src="https://cdn2.thecatapi.com/images/9ha.jpg" alt="" />

                        
                    </div>
                  
                
                    <div className="img-container" id="left">
                        <img src="https://cdn2.thecatapi.com/images/cko.jpg" alt="" />

                    </div>
                    <div className="img-container" id="right">
                        <img src="https://cdn2.thecatapi.com/images/251.jpg" alt="" />

                    </div>
        </div>
        </div>
            <Bottom></Bottom>
        </div>
    </div>);
}

export default CatPage;