import React from 'react'
import {Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footersmall from '../Footersmall';
import NavbarDash from '../Navbars/NavbarDash';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Loans = () => {

    const userdetails=JSON.parse(localStorage.getItem('userloandetails'));
    const user=JSON.parse(localStorage.getItem('user'));

    const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
    const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
    const styledNav = { backgroundColor: "#401664", padding: 5 }
    const styledbuttonNav = { backgroundColor: "#410C41", marginBottom: "10px", marginLeft: 'auto', border:'none' }
    const styledtablehead={backgroundColor: '#410C41', color:'white', textAlign:'center'}

    const navigate = useNavigate();
    // const deletetoken = () => {
    //   localStorage.removeItem("token")
    //   localStorage.removeItem("user")
    //   localStorage.removeItem("formData");
    //     navigate("/")
    //  }


  return (
    <div>
   

<NavbarDash/>

<Container>
        <Row className="mt-4 pt-4 " style={{marginBottom:50}}>
          <Col lg={4} md={6} sm={9} style={{  borderRadius: '3%'}} className="p-3 m-auto shadow-lg rounded-lg " >
      

    
    <Table striped bordered hover >
          <thead style={styledtablehead}>
            <tr>
              <th colSpan={2}><h3>Existing Loan Application</h3></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Name</td>
              <td>{userdetails.name}</td>
            </tr>
            
            <tr>
            <td>Bank Name</td>
              <td>{userdetails.bank}</td>
            </tr>
           <tr>
            <td>Account Number</td>
              <td>{userdetails.account}</td>
            </tr>

            <tr>
              <td>Loan Amount</td>
              <td>{userdetails.loan}</td>
            </tr> 
        
            <tr>
              <td>Loan Duration</td>
              <td>{userdetails.tenure} Years</td>
            </tr>

            <tr>
              <td>PAN Details</td>
              <td>{userdetails.pan}</td>
            </tr>

            <tr>
              <td>Credit Rating</td>
              <td>{userdetails.cibil}</td>
            </tr>

            {/* <tr>
              <td>Mobile No.</td>
              <td>{userdetails.mobile}</td>
            </tr> */}

          </tbody>

        </Table>

        <Button style={styledbuttonNav}><ArrowBackIcon/><Link style={styledlinked} to='/dashboard'>Return to dashboard</Link></Button>
        </Col>
        </Row>
        </Container>
       
    <Footersmall/>
    </div>
  )
}

export default Loans