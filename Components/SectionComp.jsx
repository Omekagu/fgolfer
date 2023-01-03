import React from 'react';

const SectionComp = ({ title, tag, src }) => {
  return (
    <div className="SectionComp">
      <h1 className="SectionComp__container">
        <span className="SectionComp__title">{title}</span>
        <p className="SectionComp__text">{tag}</p>
      </h1>
      <img
        src="https://www.kenzo.com/dw/image/v2/AAUH_PRD/on/demandware.static/-/Library-Sites-SharedLibraryKenzo/default/dw337fda1b/home_nigo/271022_G6/IMG_HOMEPAGE_OUTERWEAR_DESKTOP_1440x734.jpg?sw=2560&sh=1305"
        alt="bg"
      />
      {/* <video className="SectionComp__video" autoPlay muted loop>
        <source src={src} type="video/mp4" />
        <source src={src} type="video/mp4" />
        Your browser is not supported
      </video> */}
    </div>
  );
};

export default SectionComp;
