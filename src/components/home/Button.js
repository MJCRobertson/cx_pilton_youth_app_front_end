import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/buttonStyles.css';

const Button = () => (
  <div id='buttonsContainer'>
    <div id='buttons'>

    <Link to='/registration'>
    <button className='mainBtn'>
    <h2 className='BtnH2'>New Registration</h2>
    <p className='BtnP'>Create new consent form record.</p>
    </button>
    </Link>

    <Link to='/contact'>
    <button className='mainBtn'>
    <h2 className='BtnH2'>Contact Details</h2>
    <p className='BtnP'>Contact details for children</p>
    </button>
    </Link>

    <Link to='/activities'>
    <button className='mainBtn'>
    <h2 className='BtnH2'>Activity Details</h2>
    <p className='BtnP'>View activities and create, edit or delete.</p>
    </button>
    </Link>

    <Link to='/people'>
    <button className='mainBtn'>
    <h2 className='BtnH2'>Register</h2>
    <p className='BtnP'>View details and filter reports</p>
    </button>
    </Link>

    <Link to='/restrictions'>
    <button className='mainBtn'>
    <h2 className='BtnH2'>Restrictions</h2>
    <p className='BtnP'>Add restriction</p>
    </button>
    </Link>
    
    </div>
  </div>
);

export default Button;
