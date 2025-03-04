import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/' className='nav-logo'>Technify</Link>
        <div className='nav-links'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/about' className='nav-item'>About</Link>
          <Link to='/contact' className='nav-item'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;