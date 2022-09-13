import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<h1>Welcome to our website!</h1>
            <p>
                We sell stuff, and we're pretty good at it. We're also pretty good at making websites, so we made this one.
            </p>
            <Link to="/contact">Click here</Link> to find out where our store is.
		</div>
	);
};

export default Home;
