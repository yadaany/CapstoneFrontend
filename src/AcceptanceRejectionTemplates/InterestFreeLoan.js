import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import thumbsup from '../Images/thumbsup.png'
const InterestFreeLoan = () => {

  const couser = useSelector(state => state.user.value)


  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
  const styledname = { color: "white", marginLeft: 'auto' };


  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem('formData'));
  const emidetails = JSON.parse(localStorage.getItem('emidata'));


  const deletetoken = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  const handleClick = () => {

    alert('Your application is succesfully accepted. Our agent will contact you shortly for document verification')

  }

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

        <Button style={styledbuttonNav} onClick={deletetoken}><Link style={styledlinked} to='/signin'>Log out</Link></Button>
      </Navbar>

      <Container>
       
        <h2> <img src={thumbsup}/>
          <i>Congratulations your interest free loan is approved!**!
            {couser.message}
          </i>
          
        </h2>
        
      </Container>

      
             <div className='container'>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th colSpan={2}>Loan Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Customer Name</td>
              <td>{userdetails.name}</td>
            </tr>

            <tr>
              <td>Loan Amount</td>
              <td>₹ {userdetails.loan}</td>
            </tr>
            <tr>
              <td>Loan Duration</td>
              <td>{userdetails.tenure} Years</td>
            </tr>

            <tr>
              <td>Monthly EMI</td>
              <td>₹ {emidetails.emi}</td>
            </tr>

            <tr>
              <td>Interest rate</td>
              <td>0%</td>
            </tr>

          </tbody>

        </Table>


        <div className='container'>

          <ul>
            <li>Loan disbursal is subject to document verification.</li>
            <li>You will receive a confirmation email and link to upload your document.</li>
            <li>Reach out to us for further clarification toll free 1800 123 1477</li>

          </ul>

          <Button onClick={handleClick} className='btn-success'>I accept the offer</Button>

        </div>
      </div>
    </div>


  )
}

export default InterestFreeLoan