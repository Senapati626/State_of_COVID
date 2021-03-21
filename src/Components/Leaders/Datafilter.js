import React from "react";
import Testsgraph from "./Tests";
import "./style.css";


const Datafilter = ({data}) => {
	
	const filteredData = data.filter((datas) => {
	return datas.population != null;
		});
//Sorts

	function testsort(array) {
    	return array.sort(function (a, b) {
      		return a.tests.total > b.tests.total
		        ? -1
		        : b.tests.total > a.tests.total
		        ? 1
		        : 0;
		    });
  	}

	function casessort(array) {
    	return array.sort(function (a, b) {
      		return a.cases.total > b.cases.total
		        ? -1
		        : b.cases.total > a.cases.total
		        ? 1
		        : 0;
		    });
  	}
  		function deathsort(array) {
    	return array.sort(function (a, b) {
      		return a.deaths.total > b.deaths.total
		        ? -1
		        : b.deaths.total > a.deaths.total
		        ? 1
		        : 0;
		    });
  	}
  	function recoveredsort(array) {
  		return array.sort(function(a,b) {
  			return (parseInt(a.cases.recovered)/parseInt(a.cases.total)) > (parseInt(b.cases.recovered)/parseInt(b.cases.total))
  			? -1
  			: (parseInt(b.cases.recovered)/parseInt(b.cases.total)) > (parseInt(a.cases.recovered)/parseInt(a.cases.total))
  			? 1
  			: 0;
  		});
  	}





  	//Pushes

  	function testsPush(arr) {
  		let dataset = [];
  		for (var i = 0; i < arr.length - 1; i++){
  			dataset.push(arr[i].tests.total);
  		}
  		return dataset;
  	}

  	function casesPush(arr) {
  		let dataset = [];
  		for (var i = 0; i < arr.length - 1; i++){
  			dataset.push(arr[i].cases.total);
  		}
  		return dataset;
  	}


  	function deathsPush(arr) {
	let dataset = [];
	for (var i = 0; i < arr.length - 1; i++){
		dataset.push(arr[i].deaths.total);
	}
	return dataset;
  	}

  	function recoveryPush(arr) {
	let dataset = [];
	for (var i = 0; i < arr.length - 1; i++){
		dataset.push(arr[i].cases.recovered);
	}
	return dataset;
  	}

  	function recoveryRatioPush(arr) {
  		let dataset = [];
  		for (var i = 0 ; i< arr.length-1; i++){
  			let num = parseInt(arr[i].cases.recovered)/parseInt(arr[i].cases.total);
  			let roundedNum = num.toFixed(4);
  			dataset.push(roundedNum);
  		}
  		return dataset;
  	}

  	function labelssPush(arr) {
	let labelset = [];
	for (var i = 0; i < arr.length - 1; i++){
		labelset.push(arr[i].country);
	}
	return labelset;
  	}




  	//Additions

  	function testsAdd(arr1, arr2){
		let dataset = [];
		let Obj = function(v1,v2){
		    this.country = v1;
		    this.Tests_Conducted = v2;
		}
		for (var i=0; i<arr1.length-1;i++){
		    let obj = new Obj(arr1[i],arr2[i]);
		    dataset.push(obj);
		}
		return dataset;
	}

	  	function casesAdd(arr1, arr2){
		let dataset = [];
		let Obj = function(v1,v2){
		    this.country = v1;
		    this.Number_Of_Cases = v2;
		}
		for (var i=0; i<arr1.length-1;i++){
		    let obj = new Obj(arr1[i],arr2[i]);
		    dataset.push(obj);
		}
		return dataset;
	}

 	function deathsAdd(arr1, arr2){
	let dataset = [];
	let Obj = function(v1,v2){
	    this.country = v1;
	    this.Number_Of_Deaths = v2;
	}
	for (var i=0; i<arr1.length-1;i++){
	    let obj = new Obj(arr1[i],arr2[i]);
	    dataset.push(obj);
	}
	return dataset;
}
//console.log(filteredData);


//Tests
	const sortedTestsData = testsort(filteredData);
	const finalTestsData = testsPush(sortedTestsData);
	const finalTestsLabel = labelssPush(sortedTestsData);
	const tests_title = ["Tests_Conducted"];
	const tests_conducted = testsAdd(finalTestsLabel,finalTestsData);	

//Cases
	const sortedCasesData = casessort(filteredData);
	const finalCasesData = casesPush(sortedCasesData);
	const finalCasesLabel = labelssPush(sortedCasesData);
	const cases_title = ["Number_Of_Cases"];
	const number_of_cases = casesAdd(finalCasesLabel,finalCasesData);
//Deaths
	const sortedDeathsData = deathsort(filteredData);
	const finalDeathsData = deathsPush(sortedDeathsData);
	const finalDeathsLabel = labelssPush(sortedDeathsData);
	const death_title = ["Number_Of_Deaths"];
	const number_of_deaths = deathsAdd(finalDeathsLabel,finalDeathsData);

	return(
		<div className="leader_container">
		<div className="graph_wrapper">
			<div><h2>{'Number of Cases'}</h2></div>
			<Testsgraph genius = {number_of_cases}  title = {cases_title} />
		</div>
		<div className="graph_wrapper">
			<div><h2>{'Number of Deaths'}</h2></div>
			<Testsgraph genius = {number_of_deaths}  title = {death_title} />
		</div>
		<div className="graph_wrapper">
			<div><h2>{'Number of Tests'}</h2></div>
			<Testsgraph genius = {tests_conducted}  title = {tests_title} />
		</div>
		</div>
		);
}

export default Datafilter;