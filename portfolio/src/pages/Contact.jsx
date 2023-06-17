import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import NavTabs from '../components/NavTabs';

const Contact = () => {
  const [currentPage, setCurrentPage] = useState('contact');


  return (
    <div>
      <header>
        <h1>Contact</h1>
        <NavTabs Contact />
        <Navigation setCurrentPage={Contact} />
      </header>
      {/* <main>{<Contact> </Contact>}</main> */}
    </div>
  );
};

export default Contact;
