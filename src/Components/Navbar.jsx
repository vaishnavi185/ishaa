// src/Components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Navbar() {
  // const navigate = useNavigate();

  // const handleProfileClick = () => {
  //   navigate('/userprofile');
  // };

  return (
    <>
      <div className='navvs'>
        <div className='profile'>
          <img src='./Group.png' className='im1' alt='Profile'  />
          <Link className='Link' to="/userprofile"><h3 className='h'>name</h3></Link>
          <p className='p'>Email@gmail.com</p>
        </div>
        <br /><br /><br />
        <div className='nav-links'>
          <ul className='navv'>
            <li><Link className='Link' to="/"><img src='./home.png' alt='Home' /> Home </Link></li>
            <br />
            <li><Link className='Link' to="/dashboard"><img src='./dashboard.png' alt='Dashboard' /> Dashboard</Link></li>
            <br />
            <li><Link className='Link' to="/history"><img src='./history.png' alt='History' /> History</Link></li>
            <br />
            <li><Link className='Link' to="/saves"><img src='./save alt.png' alt='Saves' /> Saves</Link></li>
          </ul>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div className='logout'>
            <li><Link className='Link' to="#"><img src='./logout.png' alt='Home' /> Logout</Link></li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
