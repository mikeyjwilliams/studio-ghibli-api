import React, { useState, useEffect } from 'react';
import { GhibliFilmsApi } from './components/GhibliApis';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Films } from './components/Films';

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
      <h1>Ghibli Films!</h1>
      <Films films={films} />
    </div>
  );
}

export default App;
