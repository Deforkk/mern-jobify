import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>job <span>tracking</span> app</h1>
          <p>I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.  </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn login-link'>
            Login
          </Link>


        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;