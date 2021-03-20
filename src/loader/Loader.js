import React from "react";
import "./Loader.css";
import check from "./assets/002-check.png";
import social from "./assets/social-distancing.png";
import doc from "./assets/003-doctor.png";
import lock from "./assets/004-door lock.png";
import wash from "./assets/028-washing hands.png";


const loaders = [
{img: check, text: "Check your body temperature on a regular basis" },
{img: social, text: "Always maintain social distancing"},
{img: doc, text: "Take a moment to appreciate the efforts made by our doctors."},
{img: lock, text: "Always spray disinfectants on door locks and handles."},
{img: wash, text: "Never forget to wash your hands."}
]

let pick = Math.floor(Math.random() * loaders.length);

export default function Loader(){
	return(
		<div className="loader-container">
		<div className="loading">
			<p>{loaders[pick].text}</p>
			<img alt="" style={{width: "200px", height: "auto"}} src={loaders[pick].img}/>
		</div>
	    <div className="bouncer">
	      <div></div>
	      <div></div>
	      <div></div>
	      <div></div>
    	</div>
    	<div><p>{"Loading Component. Please wait.."}</p></div>

		</div>
		);
}