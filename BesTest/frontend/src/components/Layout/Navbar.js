import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Actions/auth';

function Navbar({ auth: { isAuthenticated, loading, user }, logout }) {
  const loggout = (e) => {
    e.preventDefault();
    logout();
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  };
   const authLinks = (
    <div className='navbarlogin'>
      <ul className='listnavbar'>
        <li>
          <Link to='home' className='linknav'>
            home
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='profile' className='linknav'>
            <FontAwesomeIcon className='' icon={faUser} />
            Profile
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            Dashboard
          </Link>
          <div id='indicator'></div>
        
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='listnavbar list-navbarlogin'>
      <li>
        <Link to='../innerPages/TeacherSignupPage' className='linknav'>
          Register
        </Link>
        <div id='indicator'></div>
      </li>
      <li>
        <Link to='' className='linknav'>
          Login
        </Link>
        <div id='indicator'></div>
      </li> 
      <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
    </ul> 
    
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='Dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            DashboardAdmin
          </Link> 

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='mynavvbar'>
      <Link to='/'>logo</Link>

      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null && user.typeuser == 'isAdmin'
          
          ? adminLinks
          : isAuthenticated && user !== null && user.typeuser == 'Teacher'
         ? authLinks
         : guestLinks
        }
      </Fragment>

      {/* <Fragment>
        {profile === null || loading
          ? null
          : isAuthenticated && profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment> */}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

  // logoutadmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,

  // admin: state.admin,
});

export default connect(mapStateToProps, {logout,
})(Navbar);
