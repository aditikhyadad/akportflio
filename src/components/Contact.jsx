import React, { useRef } from 'react';
import BackgroundImage from '../assets/projects/Background2.png';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent');
    window.location.reload(); // This will refresh the page
  };

  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form
        ref={formRef}
        method='POST'
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className='flex flex-col max-w-[600px] w-full'
        onSubmit={handleSubmit}
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Shoot me an email @aditikhyadad@gmail.com if you have any queries</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
        <button
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
          type="submit"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default Contact;
