// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
   
//   )
// }

// export default Home

import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import NavTabs from '../components/NavTabs';
import App from '../components/Footer';


const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  return (
    <div>
      <header>
        <h1>Home</h1>
        <NavTabs Home />
        <Navigation setCurrentPage={Home} />
      </header>
      {/* <main>{<Home> </Home>}</main> */}
    </div>
  );
};

export default App;
