import React from 'react';
import {Navigation} from './components/Navigation';


const App = () => {
  return (
    <div>
      <header>
        <h1>Contact</h1>
        <Navigation setActiveSection={setActiveSection} />
      </header>
      <main>{ContactSection()}</main>
    </div>
  );
};

export default App;
