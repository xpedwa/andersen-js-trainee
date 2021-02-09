// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import jsonp from 'jsonp';
import './Search.css';

function searchByGitHub(req) {
  jsonp(
    `https://github.com/search?q=${req}`, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data);
      }
    },
  );

  fetch(
    `https://github.com/search?q=${req}`,
    {
      mode: 'no-cors',
    },
  )
    .then((response) => console.log(response));
}

function SearchPanel() {
  const [req, setReq] = useState('');
  return (
    <div className="SearchPanel">
      <input onChange={(e) => setReq(e.target.value)} placeholder="Search by GitHub repository" />
      <button type="button" onClick={() => searchByGitHub(req)}>GO</button>
    </div>
  );
}

function SearchResult() {
  return (
    <div className="SearchResult">
      res
    </div>
  );
}

function Search() {
  return (
    <div>
      <SearchPanel />
      <SearchResult />
    </div>
  );
}

export default Search;
