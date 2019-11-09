import React from 'react';
import './App.css';
import {Hamburger, TotalPrice, newFolder} from "./components";


function App() {
  return (
      <div>
        <Hamburger />
        <TotalPrice />
        <newFolder/>
      </div>
  );
}

export default App;
