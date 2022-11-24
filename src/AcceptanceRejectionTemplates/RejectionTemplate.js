import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footersmall from '../Component/Footersmall';
import NavbarDash from '../Component/Navbars/NavbarDash';
import swal from 'sweetalert'

const RejectionTemplate = () => {
  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem('formData'));

  const handleClick = () => {
    // alert('Your application is succesfully accepted. Our agent will contact you shortly for document verification')
    swal({
      title: "Loan rejected!",
      text: "You can contact us on our toll free number 1800 123 4579 for any further queries",
      icon: "info"
    });
    navigate("/dashboard")
  }

  return (
    <div>
      <NavbarDash />
      <div className='container mt-5 bg-warning'>
        <div className='m-5'>
          <h2>Thank you for applying for the loan</h2>
          <h3>After analysing your information we are sorry to inform you that you are currently not eligible for Car loan.</h3>
          <p>You can contact us on our toll free number 1800 123 4579 for any further queries.</p>
        </div>
      </div>
      <div className='mt-5'>
        
        <Button onClick={handleClick} className='btn-success'>Go Back to Dashboard</Button>

        <Footersmall />
      </div>
    </div>
  )
}

export default RejectionTemplate