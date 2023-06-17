import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';


const Resume = () => {
  const [currentPage, setCurrentPage] = useState('Resume');


  return (
    <div>
      <header>
        <h1>Resume</h1>
        <Navigation setCurrentPage={Resume} />
      </header>
      {/* <main>{<Resume> </Resume>}</main> */}
    </div>
  );
};

export default Resume;
