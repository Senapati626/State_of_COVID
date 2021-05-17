import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Text,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./graphs.css";


export default function Nationgraph({data}) {

  const labelArray = Object.keys(data);

  const casesData = Object.values(data);

  const casesAdd = (arr1, arr2) => {
    let dataset = [];
    let Obj = function(v1,v2){
        this.name = v1;
        this.Cases = v2;
    }
    for (let i=arr1.length-1; i>0;i--){
        let obj = new Obj(arr1[i],arr2[i].total_cases);
        dataset.push(obj);
    }
    return dataset;
  }
    const deathsAdd = (arr1, arr2) => {
    let dataset = [];
    let Obj = function(v1,v2){
        this.name = v1;
        this.Deaths = v2;
    }
    for (let i=arr1.length-1; i>0;i--){
        let obj = new Obj(arr1[i],arr2[i].deaths);
        dataset.push(obj);
    }
    return dataset;
  }
    const testAdd = (arr1, arr2) => {
    let dataset = [];
    let Obj = function(v1,v2){
        this.name = v1;
        this.Tests = v2;
    }
    for (let i=arr1.length-1; i>0;i--){
        let obj = new Obj(arr1[i],arr2[i].tested);
        dataset.push(obj);
    }
    return dataset;
  }
      const rrAdd = (arr1, arr2) => {
    let dataset = [];
    let Obj = function(v1,v2){
        this.name = v1;
        this.recovery_ratio = v2;
    }
    for (let i=arr1.length-1; i>0;i--){
        let obj = new Obj(arr1[i],arr2[i].recovery_ratio);
        dataset.push(obj);
    }
    return dataset;
  }
  const data3 = casesAdd(labelArray,casesData);

  const data4 = deathsAdd(labelArray,casesData);

  const data5 = testAdd(labelArray,casesData);

  const data6 = rrAdd(labelArray,casesData);
  return (
    <div className="graph_container">
    <p>Each unit in the X-axis represents two weeks between {labelArray[labelArray.length-1]} and {labelArray[0]}</p>
    <div>
    <h2>{"Growth of Cases"}</h2>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data3}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="date" />
      <YAxis dataKey=""Cases/>
      <Text scaleToFit="true"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Cases"
        stroke="#8884d8"
        strokeWidth="5px"
        dot={{ stroke: '#41caca', strokeWidth: 2 }}
        activeDot={{stroke: "#fe6a6a", strokeWidth: 2, r: 8 }}
      />
    </LineChart></ResponsiveContainer></div>
    <div>
    <h2>{"Number of Deaths"}</h2>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data4}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="date" />
      <YAxis dataKey=""Cases/>
      <Text scaleToFit="true"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Deaths"
        stroke="var(--alert_red)"
        strokeWidth="5px"
        dot={{ stroke: '#41caca', strokeWidth: 2 }}
        activeDot={{stroke: "#fe6a6a", strokeWidth: 2, r: 8 }}
      />
    </LineChart></ResponsiveContainer></div>
    <div>
    <h2>{"Number of Tests Conducted"}</h2>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data5}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="date" />
      <YAxis dataKey=""Cases/>
      <Text scaleToFit="true"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Tests"
        stroke="var(--positive_green)"
        strokeWidth="5px"
        dot={{ stroke: '#41caca', strokeWidth: 2 }}
        activeDot={{stroke: "#fe6a6a", strokeWidth: 2, r: 8 }}
      />
    </LineChart></ResponsiveContainer></div>
    <div>
        <h2>{"Rate of Recovery"}</h2>
        <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data6}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="date" />
      <YAxis dataKey=""Cases/>
      <Text scaleToFit="true"/>
      <Tooltip
            labelStyle={{ color: "green", fontSize: "1em" }}
            itemStyle={{ color: "var(--vibe_pink)" }}
            formatter={function(value, name) {
              return `${value}`;
            }}
            labelFormatter={function(name, value) {
              return `${name}`;
            }}
       />
      <Legend />
      <Line
        type="monotone"
        dataKey="recovery_ratio"
        stroke="var(--vibe_pink)"
        strokeWidth="5px"
        dot={{ stroke: '#41caca', strokeWidth: 2 }}
        activeDot={{stroke: "#fe6a6a", strokeWidth: 2, r: 8 }}
      />
    </LineChart></ResponsiveContainer></div>
     <div>
        <p style={{color: "var(--base_white)",
                   fontSize: "10px",
                  textAlign: "center",
                  maxWidth: "80ch",
                  marginTop: "2em"}}>
          {"P.S - Use '-' in place of spaces while inputting name of countries. ( i.e - Type Sri-Lanka instead of Sri Lanka )  Please reload the page for inputting a new Nation. Work is in progress to fix this issue."}</p>
    </div>
    </div>

  );
}
