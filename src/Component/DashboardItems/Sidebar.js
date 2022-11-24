import { AccountBox, Article, CalculateRounded, Home } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// import { Card } from "react-bootstrap";
// import profile from '../../Images/profile.png'
import SupportIcon from '@mui/icons-material/Support';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Card } from "react-bootstrap";
const Sidebar = () => {

  const userdetails = JSON.parse(localStorage.getItem('user'));
  const [appuser, setAppuser] = useState({});
  const navigate = useNavigate();

  let token = JSON.parse(localStorage.getItem('token'));
  // const header = new Headers({ 'Authorization': `Bearer ${token}` });
  // const options = {
  //    headers: header,
  // };

  // const config = {
  //   headers: { Authorization: `Bearer ${token}` }
  // };

  let mob = userdetails.mobile

  const handleloginClick = (e) => {
    e.preventDefault();

    console.log(mob)
    console.log(token)
    // const headers= { 
    //   // 'Access-Control-Allow-Origin': '*',
    //   // 'Content-type': 'application/json',
    //   'Content-Type': 'text/plain',
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YWRhYW55MTIzIiwiZXhwIjoxNjY4ODc2MjI4LCJpYXQiOjE2Njg4NDAyMjh9.jnxPovwKA8ncXYKDiSRoc9ewR_jCuKSl7v1Q-UW9SxM' }

    // axios.defaults.headers.common={
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YWRhYW55MTIzIiwiZXhwIjoxNjY4ODc2MjI4LCJpYXQiOjE2Njg4NDAyMjh9.jnxPovwKA8ncXYKDiSRoc9ewR_jCuKSl7v1Q-UW9SxM',
    //   'Content-Type':'text/plain'
    // }


    axios.get(`/appData/${mob}`,

      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          "Content-type": "application/json",
          // "Authorization": `Bearer ${token}`  
          // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
          // 'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization'
        }
      })

      .then(response => {
        console.log(response.data)
        // res.headers("Access-Control-Allow-Origin", "true");
        localStorage.setItem('userloandetails', JSON.stringify(response.data));
        navigate('/loans')
      })
      .catch(function (error) {
        if (error.response.data = 'User Not Found') {
          alert("You dont have any active loan with us. Start your application for exciting offers")
          navigate('/offers')
        }
        console.log(error)
      })
  }


  const profile = () => {
    navigate('/profile')

  }

  const paymentpage = () => {
    navigate('/paymentpage')

  }

  const contactpage = () => {
    navigate('/contact')

  }

  const handleoffers = () => {
    navigate('/offers')
  }

  return (
    <Box>
      <List>
        <ListItem disablePadding sx={{ display: { xs: 'none', sm: 'flex', padding: 4 } }}>
          <AccountCircleIcon sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: 40 }} />
          <ListItemText><h4>{userdetails.name}</h4></ListItemText>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon sx={{ color: 'black' }}>
              <Home />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={profile}>
            <ListItemIcon sx={{ color: 'black' }}>
              <AccountBox><Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}></Link></AccountBox>
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="My Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleloginClick}>
            <ListItemIcon sx={{ color: 'black' }}>
              <Article />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Existing Loans" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleoffers}>
            <ListItemIcon sx={{ color: 'black' }}>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Offers" />
          </ListItemButton>
        </ListItem>
      </List>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#emicalculatorDash">
          <ListItemIcon sx={{ color: 'black' }}>
            <CalculateRounded />
          </ListItemIcon >
          <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Emi Calculator">
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={paymentpage}>
          <ListItemIcon sx={{ color: 'black' }}>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Payments" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={contactpage}>
          <ListItemIcon sx={{ color: 'black' }}>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary="Contact Us" />
        </ListItemButton>
      </ListItem>

    </Box>
  )
}
export default Sidebar