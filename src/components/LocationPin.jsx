import { Icon } from "@iconify/react";
import "../styles/LocationPin.css";
// ? https://icon-sets.iconify.design/carbon/location-filled/

const LocationPin = ({ text }) => (
	<div className="pin">
		<Icon icon="carbon:location-filled" color="#00243c" width="64" />
		<p className="pin-text">{text}</p>
	</div>
);

export default LocationPin;
