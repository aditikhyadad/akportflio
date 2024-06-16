import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi! My name is Aditi Khyadad, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a fourth-year Computer Science engineering student who brings 
                technical expertise and creative flair to every project. 
                Beyond coding, my passion for art encompasses drawing and crafting intricate designs. 
                Photography allows me to capture and express life's moments, 
                while poster making enables me to visually communicate powerful ideas. 
                Whether coding or painting, I thrive on merging logic with creativity. 
                My portfolio highlights not only my academic accomplishments 
                but also my diverse talents. Driven by innovation and excellence, 
                I aim to use my skills to make meaningful contributions in both 
                the tech and design sectors.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
