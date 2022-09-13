import React from "react";
import Map from "./Map";

const location = {
	address: "3831 Piermont Dr NE, Albuquerque, New Mexico 87111",
	lat: 35.12613739824834,
	lng: -106.53677914936095,
};

const Contact = () => {
	return (
		<div className="contact-container">
			<h1>Contact Us</h1>
			<p>
				<b>E-mail:</b>
				<a href="mailto:company@gmail.com"> company@gmail.com</a>
				<br />
				<b>Phone:</b>
				<a href="tel:555-555-5555"> 555-555-5555</a>
				<br />
				<b>Address: </b>
				{location.address}
			</p>
			<Map location={location} zoomLevel={17} />
		</div>
	);
};

export default Contact;
