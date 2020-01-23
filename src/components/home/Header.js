import React, {Component} from 'react';
import Logo from '../../images/pycplogo.png';
import '../../styles/headerStyles.css';

class Header extends Component {
  render() {
    return(
      <>
      <div className='headerLogo'><img src={Logo} className='logo' alt='PYCP logo'></img></div>
      </>
    );
  }
}



export default Header;
