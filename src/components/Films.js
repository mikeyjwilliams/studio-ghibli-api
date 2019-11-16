import React from 'react';

export function Films(props) {
	if (!props.films) return <h2>Loading....</h2>;
	const { films } = props;

	return (
		<div>
			<div>
				{films.map((film) => {
					return (
						<div key={film.id}>
							{/* <Title film={film} key={film.id + 't'} /> */}
							<h2>{film.title}</h2>
							<div>
								<p>Release date: {film.release_date}</p>
								<p>Director: {film.director}</p>
							</div>
							<p>{film.description}</p>
							<p>Film score: {film.rt_score}</p>

							{/* <Description film={film} key={film.id + 'd'} /> */}
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Films;

// card component holding.
// title
// director
// release_date
// rt_score
// description
