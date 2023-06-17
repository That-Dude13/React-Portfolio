import React, { useState } from 'react';

const Navigation = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSection(tab); // Pass the active tab to the parent component
  };

  return (
    <nav>
      <ul>
        <li
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => handleTabChange('home')}
        >
          Home
        </li>
        <li
          className={activeTab === 'portfolio' ? 'active' : ''}
          onClick={() => handleTabChange('portfolio')}
        >
          Portfolio
        </li>
        <li
          className={activeTab === 'resume' ? 'active' : ''}
          onClick={() => handleTabChange('resume')}
        >
          Resume
        </li>
        <li
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <PortfoliotSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <Navigation setActiveSection={setActiveSection} />
      </header>
      <main>{renderSection()}</main>
    </div>
  );
};

export default App;
