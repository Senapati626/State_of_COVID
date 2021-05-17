import React from "react";
import "./demographic.css";
import john from "./john hopkins.png";
import rapid from "./rapid.png";

export default function Demographics(){
	return(
		<div className="demographic_container">
			<div className="demographic_header">
				<h1>Demographics & Acknowledgements</h1>
				<p>{"This survey encompasses a total of 210 countries and covers statistics such as Fatality Ratio, Global Rank etc for each of them."}</p>
				
			</div>
			<div className="demographic_hero">
				<img src="https://assets.weforum.org/editor/PeMj6e8bDBohUVgaZ8ZRNv2pnB0UDujYSI6wmnjKVRY.gif"/>
				<p>{'GIF credits to Earth Time'}</p>
			</div>
			<div className="demographic_sources">
				<div className="demographic_sources_text">
					<p>{"All data and statistics has been collected from the following resources:"}</p>
				</div>
				<div className="demographic_sources_img">
					<img src={john}/>
					<img src={rapid}/>
				</div>
			</div>
		</div>
		);
}