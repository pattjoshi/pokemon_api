import React, { useState } from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form className="form-inline text-center my-2">
        <input
          className="text-center"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
