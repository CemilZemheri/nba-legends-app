import React from "react";
import nbaLogo from "../assets/nba-logo.png";

const Header = ({ search, setSearch }) => {
   


  return (
    <div className="header">
      <div className="nbaLogo">
        <img src={nbaLogo} alt="" />
      </div>
      <div className="searchArea">
        <h1>NBA Legends</h1>
        <input
          type="search"
          placeholder="Search player..."
          id="input"
          value={search} 
          onInput={(event) => setSearch(event.target.value)} 
        />
      </div>
    </div>
  );
};

export default Header;
