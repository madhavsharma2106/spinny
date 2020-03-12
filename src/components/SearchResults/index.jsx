import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../../actions/serachResultsActions.js";

function SearchResults({ results, fetchSearchResults, query }) {
  const [pageNumber, setPageNumber] = useState(2);

  const loadMore = () => {
    fetchSearchResults(query, pageNumber);
    setPageNumber(pageNumber + 1);
  };

  const renderResults = () => {
    return results.map(result => (
      <div className="result" key={result.mal_id}>
        <img src={result.url} alt={result.title} />
        <p>{result.title}</p>
      </div>
    ));
  };
  return (
    <React.Fragment>
      <div className="resultsWrapper">
        {results.length !== 0 ? renderResults() : null}
      </div>
      {results.length !== 0 ? (
        <button onClick={() => loadMore()}>Load More</button>
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
