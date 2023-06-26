import React from 'react';
import '../Styles/Home.css';

function Home(){
  return (
    <section>
    <div className='welcm-msg'>
      <h1 className='welcm-head'><b>Welcome To CareConnect</b></h1>
      <h3 className='welcm-line'>Book Your First Ambulance Today.</h3>
      <button type='submit' className='welcm-btn'>Book Now</button> 
    </div>
    <div className="homepage-container"></div>
    </section>
  );
};

export default Home;
