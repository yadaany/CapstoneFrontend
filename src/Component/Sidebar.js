import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

const Sidebar = () => {

  const userdetails = JSON.parse(localStorage.getItem('user'));
  const [appuser, setAppuser]=useState({});
  const navigate=useNavigate();

  const handleClick=(e)=>{
    e.preventDefault();

   let mob=userdetails.mobile
   let ap;

    console.log(mob)
    axios.get(`http://localhost:8090/appData/${mob}`)
    
        .then(res => {
          localStorage.setItem('userloandetails',JSON.stringify(res.data));  
          navigate('/profile')    
           }) 
        .catch(err => console.log(err))
}


    return (
      <Box
        flex={1}
        p={2}
        sx={{ color:'purple' }}>
        <box position="fixed" >
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <AccountBox/>
                </ListItemIcon>
                <Link style={{textDecoration:'none', color:'purple' }}>Profile</Link>
              </ListItemButton>

              
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Article/>
                </ListItemIcon>
                <ListItemText primary="Loans" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Group/>
                </ListItemIcon>
                <ListItemText >
                <Link style={{textDecoration:'none', color:'purple'}} to='/emiCalulator'>Emi Calculator</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Storefront/>
                </ListItemIcon>
                <ListItemText primary="Wealth" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </box>


      </Box>
    )
  }
  export default Sidebar