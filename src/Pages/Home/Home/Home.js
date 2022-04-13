import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </>
  );
};

export default Home;