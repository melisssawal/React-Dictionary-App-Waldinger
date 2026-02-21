import { useState } from 'react';
import "./App.css";
import SearchEngine from './SearchEngine';

function App() {

  return (

    <div className="container">
      <h1>Dictionary App</h1>
    <SearchEngine />
    <footer>Coded by Melissa Waldinger, available on <a href="https://github.com/melisssawal/React-Dictionary-App-Waldinger.git">GitHub</a> and hosted on <a href="https://react-dictionary-app-waldinger.netlify.app/">Netlify</a>.</footer>
    </div>
  )

}


export default App

