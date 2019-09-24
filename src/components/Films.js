import React from 'react';

export function Films(props) {
  if (!props.films) return <h2>Loading....</h2>;
  const { films } = props;

  return (
    <div>
      <div>
        {films.map(film => {
          return (
            <div key={film.id}>
              {/* <Title film={film} key={film.id + 't'} /> */}
              <h2>{film.title}</h2>
              {/* <ReleaseDate film={film} key={film.id + 'r'} />   */}
              {/* <Description film={film} key={film.id + 'd'} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// card component holding.
// title
// director
// release_date
// rt_score
// description
