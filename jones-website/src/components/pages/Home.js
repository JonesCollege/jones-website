import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import InfoSection from '../InfoSection';

function Home() {
  return (
    <>
      <InfoSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;