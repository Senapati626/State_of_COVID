import React from "react";
import Loader from "../../loader/Loader";
import "./method.css";
export default function Method({data, country}) {

data.forEach(function(item,index,array){
		item.country = item.country.toUpperCase();
	})
	const nationData = data.find(item => {
		if(country.toUpperCase() === item.country) return true;
	});
	const rankFinder = (arr) => {
		for(var i =0 ; i < arr.length-1; i++){
			if(arr[i].country.toUpperCase() === country.toUpperCase()) return i+1;
		}
	}
	const globalRank = rankFinder(data);
	return(
		<div className="nation_data_wrapper">
		{!nationData ? <Loader/> :
			<div>
			<div className="dataA data_head">
			<div className="country"><p>{nationData.country}</p><p>Population: {nationData.population}</p></div>
			</div>
			<div className="dataA data_cases">
				<div><p>Cases</p><p>{nationData.cases.total}</p></div>
				<div><p>Deaths</p><p>{nationData.deaths.total}</p></div>
				<div><p>Recoveries</p><p>{nationData.cases.recovered}</p></div>
			</div>
			<div className="dataA data_death">
				<div><p>Active Cases</p><p>{nationData.cases.active}</p></div>
				<div><p>Critical Cases</p><p>{nationData.cases.critical}</p></div>
				<div><p>New Cases</p><p>{nationData.cases.new}</p></div>
			</div>
			<div className="dataA data_recovered">
				<div><p>Case Fatality Ratio</p><p>{(parseInt(nationData.deaths.total)/parseInt(nationData.cases.total)).toFixed(5)}</p></div>
				<div><p>Recovery Ratio</p><p>{(parseInt(nationData.cases.recovered)/parseInt(nationData.cases.total)).toFixed(5)}</p></div>
			</div>
			<div className="dataA data_test">
				<div><p>Tests Conducted</p><p>{nationData.tests.total}</p></div>
				<div><p>Global Rank</p><p>{globalRank}</p></div>
			</div>
		</div>}
		</div>
		);
}