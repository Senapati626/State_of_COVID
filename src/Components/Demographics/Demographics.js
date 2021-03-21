import React from "react";
import "./demographic.css";
import map from "./map4.png";
import john from "./john hopkins.png";
import rapid from "./rapid.png";

export default function Demographics(){
	return(
		<div className="demographic_container">
		<div className="demograph1">
			<h1>Demographics & Acknowledgements</h1>
			<p>{"This survey encompasses a total of 210 countries and covers statistics such as Fatality Ratio, Global Rank etc for each of them. Thanks for visiting."}</p>
			
		</div>
		<div className="demograph2">
		<h2>Your Country or Region</h2>
		<img alt="map" src={map}/>
		</div>
		<div>
		<div className="textdemo">
			<p>{"All data and statistics has been collected from the following resources:"}</p>
		</div>
		<div style={{display: "flex", width: "100%", justifyContent: "center"}}>
			<img style={{width: "200px", height: "200px", objectFit: "cover", margin: "0 1em", filter: "contrast(50%)"}}src={john}/>
			<img style={{width: "200px", height: "200px", objectFit: "cover", margin: "0 1em"}}src={rapid}/>
		</div>
		</div>
		</div>
		);
}