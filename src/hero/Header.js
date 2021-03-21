import React from "react";
import "./header.css";

export default function Header(){
	return(
		<div className="logo-container">
		<div className="container">
          <div className="items st">
            <p>St</p>
          </div>
            <div className="items at">
            <p>At</p>
          </div>
            <div className="items e">
            <p>E</p>
          </div>
            <div className="items of">
            <p>Of</p>
          </div>
          <div className="items twenty">
            <p>20</p>
          </div>
            <div className="items twenone">
            <p>21</p>
          </div>
            <div className="covid">
            <p>CO<br/>VID</p>
          </div> 
          </div>
          <div className="hero_text">
          <p><span>A</span>s crappy as 2020 was due to the pandemic, the medical industry still managed
                to do as much as they can to pull us through this dark phase of humanity. This survey aims
                to provide a good understanding on how the COVID situation is shaping across the globe and how it's
                being tackled worldwide. Please note that, the work isn't complete yet and there are some bugs on which
                work is being done. Work is in progress for the Performers and Disappointers sections.
                </p>
          </div>
        </div>
		)
}