import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import thumbsup from '../Images/thumbsup.png'
import NavbarDash from '../Component/Navbars/NavbarDash'
import Footersmall from '../Component/Footersmall'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
const InterestFreeLoan = () => {

  const couser = useSelector(state => state.user.value)

  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
  const styledname = { color: "white", marginLeft: 'auto' };
  const styledtable ={backgroundColor: "#009688", color:'white'};

  const userdetails = JSON.parse(localStorage.getItem('formData'));
  const emidetails = JSON.parse(localStorage.getItem('emidata'));


  const navigate = useNavigate();
  const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gbvx14v', 'template_fu7j6wb', form.current, 'SSDQahtvwe6REDH9n')
        .then((result) => {
            console.log(result.text);
            swal({
              title: "Loan Approved!",
              text: "Your application is succesfully accepted. You will shortly receive an email for document verification",
              icon:"success"
            });
            // alert("Your application is succesfully accepted. You will shortly receive an email for document verification")
            navigate('/dashboard')
        }, (error) => {
            console.log(error.text);
        });
    };

  // const handleClick = () => {
  //   alert('Your application is succesfully accepted. You will shortly receive an email for document verification')
  //   navigate("/dashboard")
  // }

  return (
    <div >

      <NavbarDash />
      <div className='container' >
      
        <h2> <img src={thumbsup} />
          <i>Congratulations your interest free loan is approved!**!</i>
        </h2>
        
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
        

       

          <ul >
            <li>Loan disbursal is subject to document verification.</li>
            <li>You will receive a confirmation email and link to upload your document.</li>
            <li>Reach out to us for further clarification toll free 1800 123 1477</li>

          </ul>

          <Form ref={form} onSubmit={sendEmail}>      
            <Form.Group className="mb-3" controlId="user_name">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="hidden" placeholder={userdetails.name} value={userdetails.name} required name="from_name" />    
            </Form.Group>

            <Form.Group className="mb-3" controlId="user_name">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="hidden" placeholder={userdetails.name} value={userdetails.loan} required name="loan" />    
            </Form.Group>

            <Form.Group className="mb-3" controlId="user_email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="hidden" placeholder={userdetails.emailid} value={userdetails.tenure} required  name="tenure"/>
            </Form.Group>


            <Form.Group className="mb-3" controlId="message">
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control type="hidden" value={userdetails} placeholder="Type  your message....." required name="message"  />
            </Form.Group>
            <Button type='submit' value='send' className='btn-success'>I accept the offer</Button>
             
           
          </Form>


       
     
      </div>

      <Footersmall/>
    </div>


  )
}

export default InterestFreeLoan