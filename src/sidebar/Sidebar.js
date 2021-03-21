import React from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Data from "./Links.js";
import "./Sidebar.css";
import {IconContext} from 'react-icons';
import Loader from "../loader/Loader"

class Sidebar extends React.Component{
  constructor(){
    super();
    this.state = {
      sidebar: false,
      dataset: []
    };
  };
  componentDidMount() {
fetch("https://covid-19-data.p.rapidapi.com/totals", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "ca3d776725msh24046ff071ebdb9p1ea1aejsnfbea281c6555",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
  }
})
.then((response) => response.json())
.then((data) => this.setState({dataset: data[0]}))
.catch(err => {
  console.error(err);
});
  }
  showSidebar = () => {
    this.setState({sidebar: (!this.state.sidebar)})
  }
render(){
const {dataset} = this.state;
return(
    <>
      <div className="navbar">
      <div className="bars">
      <IconContext.Provider value={{color: '#fe6a6a'}}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={this.showSidebar} />
        </Link>
      </IconContext.Provider>
      </div>
      {dataset.length === 0 ? <div style={{textAlign: "center"}}><p style={{color:"pink"}}>...</p></div> :
      <div className="live">
        <div className="datas"><p>Confirmed Cases:</p><p>{dataset.confirmed}</p></div>
        <div className="datas"><p>Death Count:</p><p>{dataset.deaths}</p></div>
        <div className="datas"><p>Total Recoveries:</p><p>{dataset.recovered}</p></div>
      </div>}
      </div>

      <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
      	<div className="header">
      		<div className="text"><p style={{color: "white"}}>State</p></div>
      		<div className="text"><p style={{color: "#41c7c7"}}>Of</p></div>
      		<div className="text"><p style={{color: "wheat"}}>COVID</p></div>
      		<div className="text"><p style={{color: "#fe6a6a"}}>2021</p></div>
      	</div>
    	<div className="navbar-toggle">
        <IconContext.Provider value={{color: '#41c7c7'}}>
            <Link to="#" className="menu-bars">
              <FaIcons.FaRegWindowClose onClick={this.showSidebar}/>
            </Link>
          </IconContext.Provider>
        </div>
        <ul className="nav-menu-item">
          {Data.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink 
                  className="nav-items-inactive"
                  activeClassName="nav-items-active"
                  to={item.path} exact onClick={this.showSidebar}><p>{item.title}</p> <span></span></NavLink>
              </li>
            );
          })}
        </ul>
        <IconContext.Provider value={{color: '#fe6a6a', fontSize: "4px"}}>
        <p className="footy">
        Designed and Developed with <FaIcons.FaHeart/><br/>
        {"By Neellohit S."}
        </p>
        </IconContext.Provider>
      </nav>
    </>
  );
}
}

export default Sidebar;