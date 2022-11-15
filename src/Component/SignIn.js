import React, { useState, useEffect } from 'react'
import { Form, Col, Button, FormGroup, FormControl, Container, Card } from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom';

import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { login } from '../Redux/User';
import { doLogin } from './Auth';
import axios from 'axios';
import log from '../Images/log.png'
import "./Login.css";
import { useDispatch } from 'react-redux';

const SignIn = () => {

  // const styledPage = {backgroundColor: "skyblue"}
  // const custombtn={backgroundColor: "red", alignitems:"left"}

  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledLogo = {
    height: 40
  }
  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px" }


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers]=useState([]);
  // const[currentuser, setCurrentUser]=useState();
  var currentuser=null;
  var localuser;

  // let [registeredusers, setRegisteredusers] = useState([]);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  let token='';
  // const [token, setToken] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:8090/allusers`)
    
        .then(res => {
          console.log(res.data) 
          setUsers(res.data)}   
        ) 
        .catch(err => console.log(err))
})



  const handlesubmit = (e) => {

    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username) {
          currentuser = users[i]
          localuser=localStorage.setItem("user",JSON.stringify(currentuser));
          // alert("username already exist")
      }
  }

  console.log(currentuser);



    e.preventDefault();
    let sendrecord =
    {
      "username": username,
      "password": password
    }

    console.log(username);

    axios.post('http://localhost:8090/token', sendrecord)
      .then(response => {
        console.log(response.data.token);
        token=response.data.token
        // setToken(response.data.token);
        console.log(token);

        doLogin(token, () => {
          console.log("login detail is saved");
          console.log(token);

          navigate("/dashboard")
        })

        alert("Login Successfull")
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid credentials")
      })

    // dispatch(login(
    //   {
    //     username,
    //     name: currentuser.name
    //   }))
  }



  return (
    <div>
      <Navbar style={styledNav} variant="dark">

        <Navbar.Brand href="/">
          <img
            alt="Brand Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          NatWest
        </Navbar.Brand>
        <Link style={styledlinked} to='/signup'>Sign up</Link>

      </Navbar>

      <Container className='d-md-flex'>
        
      <Container>
        <img src={log} />
        </Container >
       
      <Container>
          <Card>
            <Card.Body>
          <h2 style={{ textAlign: 'center' }}>Login Form</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required onChange={(e) => setUsername(e.target.value)} />    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
   
              <Button style={styledbutton} type="submit" >
                Continue
              </Button>
              <p>Not an online user? <Link to="/signup">Sign up here</Link></p>
           
          </Form>

          </Card.Body>
          </Card>
          </Container>

        
          {/* <Container>
        <img src={log} />
        </Container > */}
       

      </Container>


      <footer style={{ backgroundColor: '#401664', color: 'white' }} className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
        <div className="col-md-8 d-flex align-items-center">

          <p> © 2005-2022 National Westminster Bank plc</p>

        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" /></svg></a></li>
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg></a></li>
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg></a></li>
        </ul>
      </footer>

    </div>
  )
}

export default SignIn