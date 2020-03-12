import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="wrapper">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults query={query} />
    </div>
  );
}

export default App;
