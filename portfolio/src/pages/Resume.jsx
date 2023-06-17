import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import NavTabs from '../components/NavTabs';


const Resume = () => {
  const [currentPage, setCurrentPage] = useState('Resume');


  return (
    <div>
      <header>
        <NavTabs Resume />
        <h1>Resume</h1>
        <Navigation setCurrentPage={Resume} />
      </header>
      {/* <main>{<Resume> </Resume>}</main> */}
    </div>
  );
};

export default Resume;
