import React, { useState } from "react";

const Search = (poke) => {
  const [search, setSearch] = useState("");
  console.log(poke);

  const filterpoke = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="form-inline text-center my-2">
        <input
          className="text-center"
          type="search"
          placeholder="Search"
          value={search}
          onChange={filterpoke}
        />
      </form>
    </div>
  );
};

export default Search;
