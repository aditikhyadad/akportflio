import React from 'react';
import BackgroundImage from '../assets/projects/background.png'

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-[#0a192f]'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: 'rgba(10, 25, 47, 0.1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='margin-top: 70px text-4xl sm:text-7xl font-bold text-pink-500'>
          ADITI KHYADAD
        </h1>

        <h2 className='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>
          Engineering Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Welcome! I am a fourth-year Computer Science 
        student with a passion for coding, art, and photography. 
        Explore my journey of merging logic with creativity.
        </p>
      </div>
    </div>
  );
};

export default Home;