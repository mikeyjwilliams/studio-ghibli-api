import React, { useState, useEffect } from 'react';
import { GhibliFilmsApi } from './components/GhibliApis';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


function App() {
  const [films, setFilms] = useState();
  useEffect(() => {
    GhibliFilmsApi(setFilms);
  }, []); 
  console.log(films);
  return (
    <div className="App">
      <h1>Ghibli Films!</h1>
    </div>
  );
}

export default App;
