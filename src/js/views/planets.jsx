import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Planets =()=>{
    const {store,actions}= useContext(Context);
    const params = useParams();

    useEffect(()=>{
        // actions.getCharacters();
        actions.getPlanet(params.id);
        },[])

        console.log(store.planet);
        
return(
 
 
    <div>
        <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">{store.planet.name}</h5>
                <p className="card-text">This is a wider. {store.planet.name}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
         </div>
  </div>  
       
);



};