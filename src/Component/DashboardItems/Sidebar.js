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


  let mob = userdetails.mobile

  const handleloginClick = (e) => {
    e.preventDefault();

    console.log(mob)
    console.log(token)
  

    axios.get(`/appData/${mob}`,

      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          "Content-type": "application/json",
        
        }
      })

      .then(response => {
        console.log(response.data)
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
        <ListItem disablePadding sx={{ display: { xs: 'none', sm: 'flex', padding: 4, color: '#410C41' } }}>
          <AccountCircleIcon sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: 40, color: '#410C41' }} />
          <ListItemText><h4>{userdetails.name}</h4></ListItemText>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon sx={{ color: '#410C41' }}>
              <Home />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' , color: '#401664' } }}> <b>Home</b></ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={profile}>
            <ListItemIcon sx={{ color: '#410C41' }}>
              <AccountBox><Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}></Link></AccountBox>
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' , color: '#401664'} }}> <b>My Profile</b></ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleloginClick}>
            <ListItemIcon sx={{ color: '#410C41' }}>
              <Article />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' , color: '#401664'} }}> <b>Loan Applications</b></ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleoffers}>
            <ListItemIcon sx={{ color: '#410C41' }}>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: 'none', sm: 'block' , color: '#401664'} }}> <b>Offers</b></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#emicalculatorDash">
          <ListItemIcon sx={{ color: '#410C41' }}>
            <CalculateRounded />
          </ListItemIcon >
          <ListItemText sx={{ display: { xs: 'none', sm: 'block', color: '#401664' } }}> <b>Emi Calculator</b></ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={paymentpage}>
          <ListItemIcon sx={{ color: '#410C41' }}>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText sx={{ display: { xs: 'none', sm: 'block', color: '#401664' } }}> <b>Payments</b></ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={contactpage}>
          <ListItemIcon sx={{ color: '#410C41' }}>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText sx={{ display: { xs: 'none', sm: 'block' , color: '#401664'} }}> <b>Contact Us</b></ListItemText>
        </ListItemButton>
      </ListItem>

    </Box>
  )
}
export default Sidebar