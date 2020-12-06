import React from 'react';
import {OurWorks, WhatIsCSOH, Places, Partners, BlogsAndNews, PaperInfo} from 'components/homepage';

const Home = () => {
  return (
    <div className='home__wrapper' >
      <OurWorks />
      <WhatIsCSOH />
      <Places />
      <Partners />
      <BlogsAndNews />
      <PaperInfo />
    </div>
  );
};

export default Home;
