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


const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  return (
    <div>
      <header>
        <h1>Home</h1>
        <Navigation setCurrentPage={Home} />
      </header>
      {/* <main>{<Home> </Home>}</main> */}
    </div>
  );
};

export default Home;
