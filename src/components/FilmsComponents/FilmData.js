import React from 'react';
import './Films.scss';

function FilmData() {
  // const { title, director, release_date, description, rt_score } = props;
  return (
    <div className='card-wrapper'>
      <div>
        <h2>Castle in the sky</h2>
        <div>
          <p>Directed by: Hayo</p>
          <p>Released: 1986</p>
        </div>
        <p>description....</p>
        <p>score: 95</p>
      </div>
    </div>
  );
}

export default FilmData;
