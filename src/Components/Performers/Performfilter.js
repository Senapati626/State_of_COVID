import React from "react";
import './performers.css';
import LottieAnimation from './Lottie';
import confetti from './confetti.json';

class Performfilter extends React.Component {
    constructor(){
        super();
        this.state = {
            rr: false,
            cfr: false,
            tpr: false,
            tpc: false,
            lcc: false
        }
    }
    showRR = () =>{
        this.setState({rr: (!this.state.rr)})
    }
    showCFR = () =>{
        this.setState({cfr: (!this.state.cfr)})
    }
    showTPR = () => {
        this.setState({tpr: (!this.state.tpr)})
    }
    showTPC = () => {
        this.setState({tpc: (!this.state.tpc)})
    }
    showLCC = () => {
        this.setState({lcc: (!this.state.lcc)})
    }
    render(){
    const finalData = this.props.data;
    const findMaxRecoveryRatio = (arr) => {
        let max = 0;
        let nation = "";
        let solve = [];
        for(let i=0; i<arr.length; i++){
            if((parseInt(arr[i].cases.recovered)/parseInt(arr[i].cases.total)) > max){
                max = (parseInt(arr[i].cases.recovered)/parseInt(arr[i].cases.total)).toFixed(4);
                nation = arr[i].country
            }
        }
        solve.push(max,nation);
        return solve;
    }
    const findMinCFR = (arr) => {
        let min = 1;
        let nation = "";
        let solve = [];
        for(let i = 0; i<arr.length; i++){
            if((parseInt(arr[i].deaths.total)/parseInt(arr[i].cases.total)) < min){
                min = (parseInt(arr[i].deaths.total)/parseInt(arr[i].cases.total)).toFixed(7);
                nation = arr[i].country;
            }
        }
        solve.push(min,nation);
        return solve;
    }
    const findMinTPR = (arr) => {
        let min = 1;
        let nation = "";
        let solve = [];
        for(let i = 0; i<arr.length; i++){
            if((parseInt(arr[i].cases.total)/parseInt(arr[i].tests.total)) < min){
                min = (parseInt(arr[i].cases.total)/parseInt(arr[i].tests.total)).toFixed(7);
                nation = arr[i].country;
            }
        }
        solve.push(min,nation);
        return solve;
    }
    const findmaxTPC = (arr) => {
        let max = 0;
        let nation = "";
        let solve = [];
        for(let i=0; i<arr.length; i++){
            if((parseInt(arr[i].tests.total)/parseInt(arr[i].population)) > max){
                max = (parseInt(arr[i].tests.total)/parseInt(arr[i].population)).toFixed(7);
                nation = arr[i].country
            }
        }
        solve.push(max,nation);
        return solve;
    }
    const findminLCC = (arr) => {
        let min = 1;
        let nation = "";
        let solve = [];
        for(let i = 0; i<arr.length; i++){
            if((parseInt(arr[i].cases.total)/parseInt(arr[i].population)) < min){
                min = (parseInt(arr[i].cases.total)/parseInt(arr[i].population)).toFixed(7);
                nation = arr[i].country;
            }
        }
        solve.push(min,nation);
        return solve;   
    }

    const CFR = findMinCFR(finalData);
    const RR = findMaxRecoveryRatio(finalData);
    const TPR = findMinTPR(finalData);
    const TPC = findmaxTPC(finalData);
    const LCC = findminLCC(finalData);
    return(
        <div>
            <div className="performer_wrapper">
                <h1 className="performer_header_main">{'Best Case Fatality Ratio'}</h1>
                <p className="performer_header_deputy">{'Case Fatality Ratio (CFR) = Number of Deaths due to COVID / Number of positive COVID cases.'}</p>
                <div className="performer_content">
                    <div className="performer_section" id="wrapper">
                        <button className={this.state.cfr ? "performer_button dissolve vanish" : "performer_button"} id="button" onClick={this.showCFR}>check results</button>
                        <p className={this.state.cfr ? "performer_text_header" : "performer_text_header vanish"} id="text">{CFR[1]}</p>
                        <p className={this.state.cfr ? "performer_text" : "performer_text vanish"}>{CFR[1] + " has a Case Fatality Ratio of just " + CFR[0] + "."}</p>
                    </div>
                    <div className={this.state.cfr ? "confetti" : "hide"}>
                        <LottieAnimation lotti={confetti} height={300} width={300}/>
                    </div>
                </div>
                <h1 className="performer_header_main">{'Best Recovery Ratio'}</h1>
                <p className="performer_header_deputy">{'Recovery Ratio = Number of Recoveries / Number of positive Cases'}</p>
                <div className="performer_content">
                    <div className="performer_section" id="wrapper">
                        <button className={this.state.rr ? "performer_button dissolve vanish" : "performer_button"} id="button" onClick={this.showRR}>check results</button>
                        <p className={this.state.rr ? "performer_text_header" : "performer_text_header vanish"} id="text">{RR[1]}</p>
                        <p className={this.state.rr ? "performer_text" : "performer_text vanish"}>{RR[1] + " has the highest Recovery Ratio of " + RR[0] + "."}</p>
                    </div>
                </div>
                <h1 className="performer_header_main">{'Lowest Test Positivity Rate'}</h1>
                <p className="performer_header_deputy">{'Test Positivity Rate = Number of Positive Cases / Number of Tests Conducted'}</p>
                <div className="performer_content">
                    <div className="performer_section" id="wrapper">
                        <button className={this.state.tpr ? "performer_button dissolve vanish" : "performer_button"} id="button" onClick={this.showTPR}>check results</button>
                        <p className={this.state.tpr ? "performer_text_header" : "performer_text_header vanish"} id="text">{TPR[1]}</p>
                        <p className={this.state.tpr ? "performer_text" : "performer_text vanish"}>{TPR[1] + " has the lowest Tests Positivity Rate of " + TPR[0] + "."}</p>
                    </div>
                </div>
                <h1 className="performer_header_main">{'Highest Tests per Capita'}</h1>
                <p className="performer_header_deputy">{'Tests per Capita = Number of Tests Conducted / Total population'}</p>
                <div className="performer_content">
                    <div className="performer_section" id="wrapper">
                        <button className={this.state.tpc ? "performer_button dissolve vanish" : "performer_button"} id="button" onClick={this.showTPC}>check results</button>
                        <p className={this.state.tpc ? "performer_text_header" : "performer_text_header vanish"} id="text">{TPC[1]}</p>
                        <p className={this.state.tpc ? "performer_text" : "performer_text vanish"}>{TPC[1] + " has the highest Tests per Capita of " + TPC[0] + ". (If it's more than 1, then two or more tests have been administered on each person)"}</p>
                    </div>
                </div>
                <h1 className="performer_header_main">{'Lowest Positive Cases per Capita'}</h1>
                <p className="performer_header_deputy">{'Cases per Capita = Total number of Cases / Total Population'}</p>
                <div className="performer_content">
                    <div className="performer_section" id="wrapper">
                        <button className={this.state.lcc ? "performer_button dissolve vanish" : "performer_button"} id="button" onClick={this.showLCC}>check results</button>
                        <p className={this.state.lcc ? "performer_text_header" : "performer_text_header vanish"} id="text">{LCC[1]}</p>
                        <p className={this.state.lcc ? "performer_text" : "performer_text vanish"}>{LCC[1] + " has the lowest positive cases per capita of " + LCC[0] + "."}</p>
                    </div>
                </div>
                
            </div> 
        </div>
    )
    }
}

export default Performfilter;