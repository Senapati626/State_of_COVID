import React from "react";
import Datafilter from "./Datafilter";
import Loader from "../../loader/Loader";


class Datawrap extends React.Component{
	constructor(){
		super();
		this.state = {
			data: []
		};
	};

	componentDidMount() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ca3d776725msh24046ff071ebdb9p1ea1aejsnfbea281c6555",
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
		const {data} = this.state;
		//console.log(filteredData);
		return(
			<div>
			{data.length === 0 ? <Loader />
				: <Datafilter key={data} data = {data}/>
			}
			</div>
			)
	}
}

export default Datawrap;