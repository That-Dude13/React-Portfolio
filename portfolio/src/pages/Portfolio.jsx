import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';


const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('Portfolio');


  return (
    <div>
      <header>
        <h1>Portfolio</h1>
        <Navigation setCurrentPage={Portfolio} />
      </header>
      {/* <main>{<Portfolio> </Portfolio>}</main> */}
    </div>
  );
};

export default Portfolio;
