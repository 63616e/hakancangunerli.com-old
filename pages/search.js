// search.js

import Navinav from "../components/navinav";
import React from "react";

export default function Search() {
  return (
    <>
      <Navinav></Navinav>
      <div style={{ backgroundColor: "#004b51", height: "100vh" }}>
        <span style={{ color: "white", textAlign:"center"}}>Explore websites, people, and locations</span>
        
        <div>
          <div className="shadow flex">
            <input
              className="w-full rounded p-2"
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="bg-white w-auto flex  items-center text-black-500 p-2 hover:text-blue-400">
              <i className="material-icons">
                <svg
                  className="site-nav__search-icon site-nav__search-icon--open"
                  width="26"
                  viewBox="0 0 23 22"
                >
                  <g stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle
                      cx="9.20757329"
                      cy="8.99160695"
                      r="8.50646589"
                    ></circle>
                    <path d="M14.8522097,14.6362434 L20.7140392,20.4980728"></path>
                  </g>
                </svg>
              </i>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
