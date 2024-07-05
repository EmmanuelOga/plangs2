import "preact/debug";

import { Fragment, h } from "preact";

import { start } from "../shared/start";

import "./search.css";

function Search() {
  return (
    <>
      <label class="search-label">
        Search:
        <input type="query" id="search-input" placeholder="Search..." />
      </label>
      <div id="search-results">Search results...</div>
    </>
  );
}

start("search", <Search />);
