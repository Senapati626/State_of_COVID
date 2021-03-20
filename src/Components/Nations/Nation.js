import React from "react";
import Method from "./Nationmethods";
import Methodgraph from "./Methodgraph";
import axios from "axios";
import "./nations.css"

class Nation extends React.Component {
		constructor(){
		super();
		this.state = {
			globaldata: [],
			input: "",
			country: ""
		};
		this.handleClick = this.handleClick.bind(this);
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
      .then((jsondata) => this.setState({ globaldata: jsondata.response }))
      .catch((err) => {
        console.error(err);
      });
  }
  onChange = (e) => {
  	this.setState({input: e.target.value})
  }
  handleClick = () => {
  	this.setState({country: this.state.input})
  }

	render(){
	const {globaldata, country} = this.state;	
	const filteredGlobalData = globaldata.filter((datas) => {
	return datas.population != null;
		});
	function casessort(array) {
	return array.sort(function (a, b) {
  		return a.cases.total > b.cases.total
	        ? -1
	        : b.cases.total > a.cases.total
	        ? 1
	        : 0;
	    });
	}
		return(
			<div className="nation_container">
				<header className="nation_header">
				<span>The State of</span>
				<span>Nations</span>
				</header>
				<div className="nation_input">
					<div className="nation_form">
						<form action="POST">
							<div className="form_text_input">
							<input type="text" 
							name="country"
							placeholder="enter country name"
							onChange={this.onChange}
							/>
							</div>
						</form>
					</div>
					<div className="nation_button">
						<button className="nation_button_submit" onClick={this.handleClick}>
							{"get data"}
						</button>
					</div>
				</div>
				{!country ? <div></div>
				: 
				<div>
				<Method data={casessort(filteredGlobalData)} country={country}/>
				<Methodgraph country={country}/>
				</div>
				}
			</div>
			)
	}
} 

export default Nation;