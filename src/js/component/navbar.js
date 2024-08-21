import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
						<Link to="/demo">
							<button className="btn btn-primary">Favorites</button>
						</Link>
					</div>
				</nav>
			</div>

	);
};
