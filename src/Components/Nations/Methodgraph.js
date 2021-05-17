import React, {useState} from "react";
import Nationgraph from "./Nationgraph";



 const url = "https://coronavirus-map.p.rapidapi.com/v1/spots/year?region=";
 class Methodgraph extends React.Component {
  
  constructor(){
    super();
    this.state = {
      historyGraph: []
    }
  }



  componentDidMount(){
  fetch(String(url+this.props.country), {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "ca3d776725msh24046ff071ebdb9p1ea1aejsnfbea281c6555", //YOUR API KEY
    "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(jsondata => this.setState({historyGraph: jsondata.data}))
.catch(err => {
  console.error(err);
});
  }
    render(){
      return(
      <div>
        {this.state.historyGraph.length === 0 ? <div><p className="graph_loader">graphs are so cool</p></div> 
        :<Nationgraph data={this.state.historyGraph} />}
      </div>
      );
}
  }

  export default Methodgraph;
