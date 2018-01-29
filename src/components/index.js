import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

const Main = ({ data: { filterMovies }, actions: { handleInputKeyword } }) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Movies Search</h1>
      </div>
    </div>
    <div className="container">
      { !filterMovies && <div>Loading...</div>}
      { filterMovies &&
        <div>
          <Search handleInputKeyword={handleInputKeyword}/>
          <div className="row">
            {
              filterMovies.map((movie, index) =>
                <div key={index} className="col-3">
                  <div className="card mb-3">
                    <img className="card-img-top" src={movie.imagePath} alt={`${movie.title} poster`} />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      }
    </div>
  </div>
);

export default Main;
