import React from 'react';

const About = () => {
  return (
    <div className='all-center'>
      <p>This site was created by Giovanni Flores.</p>
      <p>
        To see more of my work, visit{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://geflores5-portfolio.netlify.com/'
        >
          here
        </a>
        .
      </p>
      <img
        className='round-img'
        style={{ width: '560px' }}
        src='./us.jpg'
        alt='us'
      />
    </div>
  );
};

export default About;
