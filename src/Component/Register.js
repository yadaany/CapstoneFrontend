import { Card, Container, Navbar, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import reg from '../Images/reg.png'
import LoginIcon from '@mui/icons-material/Login';
import NavbarSmall from './Navbars/NavbarSmall';


function Register() {

  const styledbutton = { backgroundColor: "#401664", marginBottom:"10px" };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const errorstyle = { color: "yellow"};
  const styledform={backgroundColor: "#009688"}

  const [Users, setUsers]=useState([]);
  // const[username, setUserName]=useState('');
  // const[emailid, setEmailid]=useState('');
  var userid_exist=false;
  var emailid_exist=false;

  const navigate = useNavigate();


//   useEffect(() => {
//     axios.get(`http://localhost:8090/allusers`)
    
//         .then(res => {
//           console.log(res.data) 
//           setUsers(res.data)}   
//         ) 
//         .catch(err => console.log(err))
// })



  const onSubmit = (data) => {

  //   for (let i = 0; i < Users.length; i++) {
  //     if (data.Username === Users[i].username) {
  //         userid_exist = true
  //         // alert("username already exist")
  //     }
  // }
  // for (let i = 0; i < Users.length; i++) {
  //     if (data.Email === Users[i].emailid) {
  //       emailid_exist = true
  //         // alert("email already exist")
  //     }
  // }

  //   if (userid_exist) {
  //     alert(`Username already exist. Please use a different a username to continue`)
  // }

  //   else if (emailid_exist) {
  //     alert(`Email ID already exist. Please use a different email id to continue or Login`)
  // }

  // else{

    let addrecord =

    {
      "username": data.Username,
      "name": data.Name,
      "emailid": data.Email,
      "mobile": data.Mobile,
      "password": data.Password
    }

    console.log(addrecord)
   
    axios.post('http://localhost:8090/addUser', addrecord)
      .then(response => {
        console.log(response);
        alert(" Registeration Successfull");
        navigate("/signin")
      })
      .catch(function (error) {
        if(error.response.data="User Already Exists"){
          alert("Username already taken, Try with different one")
        }
        console.log(error);
      })

  }

  const { register, formState: { errors }, handleSubmit, trigger, watch } = useForm();
  const Password = useRef({});
  Password.current = watch("Password", "");

  return (
    <div>

      <NavbarSmall/>

      <Container className='d-md-flex p-5 my-3'>

        <Container className="d-none d-lg-block">
          <img src={reg} />
        </Container >

        <Container className='p-3' >
         <Card style={styledform}>
         <Card.Body>

         
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* <h2 style={{textAlign:'center', color:'#401664'}}>Registration Form</h2> */}
            <h2 style={{textAlign:'center'}}>Register here!</h2>
        
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control type="text" placeholder="Create your username" size='sm' 
                {...register('Username', {required: "Username is required",
                  
                  pattern: {
                    value: /^[a-zA-Z0-9@#$%^&-+=()]{5,15}$/,
                    message: "Create a unique username with minimum 5 characters"
                  }
                })} 
                onKeyUp={() => {
                  trigger("Username");
                }}
                
                />

                <Form.Text className="text-muted">
               {errors.Username && (
                  <span style={errorstyle} variant='caption'>{errors.Username.message}</span>
                )}
              </Form.Text>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="text" placeholder="Enter your full name" size='sm'
                {...register('Name', {
                  required: "Name is required",
                  pattern: {
                    // value: /^[?!/s]+[a-zA-Z ]{5,40}$/,
                    value:/^[^0-9^!#@%$&*()_+-\s][a-zA-Z\s]+$/,
                    message: "Name can't contain special characters or numbers",
                  }
                })} 
                onKeyUp={() => {
                  trigger("Name");
                }}
                />

                <Form.Text className="text-muted">
               {errors.Name && (
                  <span style={errorstyle} variant='caption'>{errors.Name.message}</span>
                )}
              </Form.Text>
              </Form.Group>

              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter your email address" size='sm'
                {...register('Email', { required: "Email id is required",
                pattern: {
                  value: /^[^!#@%$&*()_+-\s][a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                  message: "Invalid Email Format",
                 }})}
                onKeyUp={() => {
                  trigger("Email");
                }}
              />

              <Form.Text className="text-muted">
               {errors.Email && (
                  <span style={errorstyle} variant='caption'>{errors.Email.message}</span>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >     
            <Form.Control type="numeric" placeholder="Mobile Number" size='sm'
               {...register('Mobile', { required: "Mobile Number is required",
               pattern: {
                 value: /^[^!#@%$&*()_+-\s][0-9]{09}$/,
                 message: "Mobile Number must have 10 digits only",
                }})}
               onKeyUp={() => {
                 trigger("Mobile");
               }}
              />  
              <Form.Text className="text-muted">
               {errors.Mobile && (
                  <span style={errorstyle} variant='caption'>{errors.Mobile.message}</span>
                )}
              </Form.Text>
              </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Enter your password" size='sm'
               {...register('Password', { required: "Password is required",
               pattern: {
                 value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?!.* ).{8,40}$/,
                 message: `Your password should contain atleast 8 characters. Must Contain 1 uppercase,  1 lowercase, 1 numeric and atleast 1 symbols ( @ # % ^ & - _ )`,
               }})}
               onKeyUp={() => {
                 trigger("Password");
               }}
              />
              <Form.Text className="text-muted">
               {errors.Password && (
                  <span style={errorstyle} variant='caption'>{errors.Password.message}</span>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control type="password" placeholder="Confirm-Password" size='sm'
              {...register('ConfirmPassword', { required: "Password and Confirm-Password should be same",
              validate: value =>
              value === Password.current || "The passwords do not match"
              })}
              onKeyUp={() => {
                trigger("ConfirmPassword");
              }}
              
              />
              <Form.Text className="text-muted">
               {errors.ConfirmPassword && (
                  <span style={errorstyle} variant='caption'>{errors.ConfirmPassword.message}</span>
                )}
              </Form.Text>
            </Form.Group>

            <Button style={styledbutton} type="submit">
              Submit
            </Button>

            <p>Already registered ? <Link style={{color:'white'}} to="/signin">Login</Link></p>
          </Form>
          </Card.Body>
          </Card>
       
        </Container>
      </Container>
      <footer style={{backgroundColor:'#401664', color:'white'}} className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
    <div className="col-md-8 d-flex align-items-center">
     
      <p> © 2005-2022 National Westminster Bank plc</p>
      
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg></a></li>
        <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
        <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}}  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
    </ul>
  </footer>
     
    </div>
  );
}

export default Register;