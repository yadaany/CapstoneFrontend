import { Logout, Person } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';
import React from 'react'
import { Button, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarDash = () => {
    const userdetails = JSON.parse(localStorage.getItem('userloandetails'));
    const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto', border: 'none' };
    const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
    const styledNav = { backgroundColor: "#401664", padding: 5 }
    const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }

    const navigate = useNavigate();

    // const deletetoken = () => {
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('user')
    //     localStorage.removeItem('formData');
    //     localStorage.removeItem('emiData');
    //     localStorage.removeItem('userloandetails');
    //     navigate("/")
    // }

    const deletetoken = () => {
        localStorage.clear();  
        navigate("/")
    }
    const user=JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <Navbar style={styledNav} variant="dark">
                <Navbar.Brand href="/dashboard">
                    <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    NatWest
                </Navbar.Brand>
                <div style={{ marginLeft: 'auto', color: 'white' }}><h4>Welcome {user.name}</h4></div>
                <div style={{ marginLeft: 'auto', color: 'white' }}>
                
                    <Logout />
                    <Link onClick={deletetoken} style={styledlinked} to='/'>Log out</Link>
                </div>

            </Navbar>

        </div>
    )
}

export default NavbarDash