import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../../actions/serachResultsActions";

function SearchBar({ fetchSearchResults, query, setQuery }) {
  const handleOnSubmit = e => {
    e.preventDefault();
    fetchSearchResults(query);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" onKeyUp={e => setQuery(e.target.value)} />
      <button type="submit">Go</button>
    </form>
  );
}

export default connect(null, { fetchSearchResults })(SearchBar);
