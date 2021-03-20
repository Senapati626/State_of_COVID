import React from "react";
import {ResponsiveBar} from "@nivo/bar";

const colorScheme = ["nivo", "set2", "pastel1", "yellow_orange_red", "accent", "paired"];


const Testsgraph = ({ genius, title}) => {
const pick = Math.floor(Math.random()*colorScheme.length);



const data3 = genius.slice(0,15);
	return (
		<div style={{height: "68vh", width: "90%", maxWidth: "100vw"}}>
		<ResponsiveBar
        data={data3}
        keys={title}
        indexBy="country"
        margin={{ top: 50, right: 80, bottom: 85, left: 110 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        theme={
            {
            textColor: "#41c7c7",
            fontSize: "1vw",
            fontFamily: "IBM Plex Mono"
        }}
        colors={{ scheme: colorScheme[pick] }}
        colorBy="index"
        borderRadius= {1}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: title,
            legendPosition: 'middle',
            legendOffset: 52,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
        }}
        enableGridY={false}
        labelSkipWidth={90}
        labelSkipHeight={12}
        labelTextColor={{ from: '#333', modifiers: [ [ 'darker', 1.6 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
		</div>
		)
}

export default Testsgraph;