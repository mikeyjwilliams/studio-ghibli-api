import React, { useState, useEffect } from 'react';
import { GhibliFilmsApi } from './components/GhibliApis';
import Films from './components/Films';
import FilmData from './components/FilmsComponents/FilmData';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// objects -> must map the set
// card component holding.
// title
// director
// release_date
// rt_score
// description

function App() {
	const [films, setFilms] = useState();

	useEffect(() => {
		GhibliFilmsApi(setFilms);
	}, []);

	return (
		<div className="App">
			<CssBaseline />
			<h1>Ghibli Films!</h1>
			<FilmData />
			<Films films={films} />
		</div>
	);
}

export default App;
