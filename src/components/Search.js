import React from "react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <div className="searchIcons">
        <BsSearch />
      </div>
      <div className="menu">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default Search;
