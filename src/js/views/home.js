
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import React, { useState, useEffect, useContext,useParams } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";





export const Home = () => {
	const {store,actions}= useContext(Context);
	// const params = useParams();
    useEffect(()=>{
        actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
        },[])

	return(

		<div>
			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel">Characters</h2>	
					<div className="scrolling-wrapper">
						{store.listCharacters.map((item)=>(<div className="card mx-1 bg-black" key={item.uid} id={item.uid}>
						<img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
								<Link to={"/characters/"+item.uid}><a className="btn btn-Success" onClick={()=> actions.getCharacter(item.uid)} >Details</a></Link>
								<a className="btn btn-light text-end" onClick={()=>actions.saveToFavoritePeople(item.uid)}>⭐</a>
							</div>
						</div>))}
						{/* <div className="card mx-1 bg-black"><img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen 1"/><div className="card-body">
						<a className="btn btn-light text-end" >...</a></div>
						</div> */}
					</div>
				</div>

			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel">Vehicles</h2>	
					<div className="scrolling-wrapper">
						{store.listVehicles.map((item)=>(<div className="card mx-1 bg-black" key={item.uid} id={item.uid}>
						<img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
								<Link to={"/vehicles/"+item.uid}><a className="btn btn-Success" onClick={()=> actions.getVehicle(item.uid)}>Details</a></Link>
								<a className="btn btn-light text-end">⭐</a>
							</div>
						</div>))}
					</div>
			</div>	

			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel">Planets</h2>	
					<div className="scrolling-wrapper">
						{store.listPlanets.map((item)=>(<div className="card mx-1 bg-black" key={item.uid} id={item.uid}>
						<img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
								<Link to={"/planets/"+item.uid}><a className="btn btn-Success" onClick={()=> actions.getPlanet(item.uid)}>Details</a></Link>
								<a href="#" className="btn btn-light text-end">⭐</a>
							</div>
						</div>))}
					</div>
			</div> 
		</div>	
	);		
};
