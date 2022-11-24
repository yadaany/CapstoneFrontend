import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const NavbarSmall = () => {
  
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 };


  return (
    <div>
      <Navbar style={styledNav} variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          NatWest
        </Navbar.Brand>
        <Link style={styledlinked} to='/signin'>Sign in <LoginIcon style={{ marginLeft: 'auto', color: 'white' }} /></Link>
      </Navbar>
    </div>
  )
}

export default NavbarSmall