import React from "react";
import Loader from "../../loader/Loader";
import Performfilter from './Performfilter';


class Performer extends React.Component{
	constructor(){
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch("https://covid-193.p.rapidapi.com/statistics", {
		  method: "GET",
		  headers: {
			"x-rapidapi-key": "ca3d776725msh24046ff071ebdb9p1ea1aejsnfbea281c6555", //YOUR API KEY
			"x-rapidapi-host": "covid-193.p.rapidapi.com"
		  }
		})
		  .then((response) => response.json())
		  //.then((jsondata) => console.log(jsondata.response))
		  .then((jsondata) => this.setState({ data: jsondata.response }))
		  .catch((err) => {
			console.error(err);
		  });
	  }

	render(){
		const filteredData = this.state.data.filter((items) => {
			return items.population != null;
		});
		return(
			<div>
				<h1 style={{color: "var(--positive_green)",textAlign: "center", fontSize: "2.8em",textTransform: "uppercase"}}>{'The Performers'}</h1>
			{this.state.data.length === 0 ? <Loader />
				: <Performfilter data = {filteredData}/>
			}
			</div>
		)
	}
}

export default Performer;