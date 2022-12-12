import React from 'react';
import SectionThree from '../Components/SectionThree';
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__section--one">
        <SectionOne />
        <div className="Home__section--two">
          <SectionTwo />
        </div>
        <div className="Home__section--three">
          <SectionThree />
        </div>
      </div>
    </div>
  );
};

export default Home;
