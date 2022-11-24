import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarDash from '../Navbars/NavbarDash';
import Footersmall from '../Footersmall';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbvx14v', 'template_vsu5oif', form.current, 'SSDQahtvwe6REDH9n')
      .then((result) => {
        console.log(result.text);
        alert("Thanks for contacting NatWest. We will respond to your query as soon as possible")
        navigate('/dashboard')
      }, (error) => {
        console.log(error.text);
      });
  };

  const userdetails = JSON.parse(localStorage.getItem('user'));



  return (
    <div>

      <NavbarDash />

      {/* <h1 style={{ textAlign: 'center' }}>Contact NatWest</h1> */}
      <div className='container justify-content-between align-items-center '>

        <div className='container m-3 p-5'>


          <Card style={{ backgroundColor: '#D9D9D6', width: 500, marginLeft: 300, padding: 50 }}>
            <div className='d-flex'>
              <div>
                <h3 >Contact Us </h3>
              </div>

              <div style={{marginLeft:'auto'}}>
                <Card.Text><LocalPhoneIcon />Customer care : 0123654987</Card.Text>
                <Card.Text><LocalPhoneIcon />Toll free no:1800 464 321</Card.Text>
              </div>
            </div>



            {/* <span>Customer care : 0123654987 </span>  <br/>
                <span> Toll free no:1800 464 321</span> */}
            <Card.Header><EmailIcon /> Write us</Card.Header>
            <Card.Body>

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="user_name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder={userdetails.name} value={userdetails.name} required name="from_name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="user_email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder={userdetails.emailid} value={userdetails.emailid} required name="user_email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} type="message" placeholder="Describe your concern here....." required name="message" />
                </Form.Group>
                <Button size='lg' style={{ backgroundColor: '#00868B', border: 'none', marginBottom: 10 }} type="submit" value="Send" >
                  Send
                </Button>



              </Form>

            </Card.Body>
            <div style={{ textAlign: 'right' }}>

            </div>
          </Card>



          {/* <div >   
              <Card.Text><LocalPhoneIcon/>Customer care : 0123654987</Card.Text> 
             <Card.Text><LocalPhoneIcon/>Toll free no:1800 464 321</Card.Text>
             </div>  */}
        </div>
      </div>



      <Footersmall />
    </div>
  );
};