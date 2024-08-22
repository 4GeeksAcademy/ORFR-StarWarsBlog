import React, { useState, useEffect, useContext,useParams } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions}=useContext(Context);
    
    useEffect(()=>{
	// store.favorites
	},[])


	return (	
			<div>
				<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
					<div className="container-fluid">
						<Link to="/"><a className="navbar-brand" href="#">Home</a></Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse text-light" id="navbarNavAltMarkup" >
						<div className="navbar-nav text-light">
							{/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
						{/* <Link to="/characters"><a className="nav-link" >Chracters</a></Link>
							<a className="nav-link" >Planets</a>
							<a className="nav-link" >Vehicles</a> */}
						</div>
						</div>
						<div className="btn-group">
							<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							⭐{store.favorites.length}
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{store.favorites.map((item,index)=>(<li key={index}>{item.name}<a onClick={()=>actions.deleteFavorite(index)
								}>🗑️</a></li>))}
							</ul>
						</div>
					</div>
				</nav>
			</div>

	);
};
