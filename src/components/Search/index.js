import React from 'react';

const Search = ({ handleInputKeyword }) => (
  <div className="mb-5">
    <h2 className="text-center">Type to search</h2>
    <form>
      <input
        className="form-control text-center"
        type='search'
        placeholder='movie name...'
        onChange={(event) => handleInputKeyword(event.target.value)}
      />
    </form>
  </div>
);

export default Search;
