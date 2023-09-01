import React,{useEffect, useState } from "react";
import "./Container.css"
import "./CatPage.css";
import Top from "./Top";
import Bottom from "./Bottom";
import axios from "axios";
import { useParams } from 'react-router-dom';


function CatPage (props) {

    //const catName = decodeURIComponent(props.catName);
    const {catName} = useParams();
    const [catData, setCatData] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:3000/cat/${catName}`)
          .then(response => {
            setCatData(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching cat data:', error);
          });

      }, [catName]);


  useEffect(() => {
    
    axios.get(`http://localhost:3000/cat/${catName}`)
    .then(response => {
      setCatData(response.data);
    })
    .catch(error => {
      console.error('Error fetching cat data:', error);
    });

    console.log("CatData" + catData);


        document.body.style.height = '170vh';
        document.documentElement.style.height = '100vh';
    

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
                        <img src={catData.image_url} alt="" />

                    </div>

                    </div>
                <div> 
                    <div className="container-1-traits">
                        <h2>{catData.name}</h2>
                        <p>{catData.description}</p>
                       
                       <div><p className="traits"> Temperament:</p> {catData.temperament} <p className="trait"> </p></div>
                        <div><p className="traits">Origin:</p> <p className="trait">{catData.origin}</p></div>
                        <div><p className="traits">Life Span:</p> <p className="trait">{catData.life_span} years</p></div>
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
                        <img src={catData.images_1} alt="" />
                        </div>

            </div>
                    <div className="img-container" id="right">
                        <img src={catData.images_2} alt="" />

                        
                    </div>
                  
                
                    <div className="img-container" id="left">
                        <img src={catData.images_3} alt="" />

                    </div>
                    <div className="img-container" id="right">
                        <img src={catData.images_4} alt="" />

                    </div>
            </div>
            <div className="container-2-photos-row" id="photos-2">

            
            <div className="img-container" id="left">
                        <div id="first-image">
                        <img src={catData.images_5} alt="" />
                        </div>

            </div>
                    <div className="img-container" id="right">
                        <img src={catData.images_6} alt="" />

                        
                    </div>
                  
                
                    <div className="img-container" id="left">
                        <img src={catData.images_7} alt="" />

                    </div>
                    <div className="img-container" id="right">
                        <img src={catData.images_8} alt="" />

                    </div>
        </div>
        </div>
            <Bottom></Bottom>
        </div>
    </div>);
}

export default CatPage;